import { UniqueFileName } from '@/lib/uniqueFileName'
import { existsSync } from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import { join } from 'path'
import fs from 'fs/promises'
import { prisma } from '@/server/db'
import { deletePhoto } from '@/lib/deletePhoto'
import { uploadPhoto } from '@/lib/uploadPhoto'

export async function POST(
  req: NextRequest,
  { params }: { params: { id: number } },
) {
  try {
    const id = Number(params.id)
    const data = await req.formData()
    const file: File | null = data.get('avatar') as unknown as File
    if (!file) {
      return NextResponse.json({ success: false })
    }

    const destinationDirPath = join(process.cwd(), 'public/avatar')
    const { uniqueName } = UniqueFileName(file.name)
    const destination = join(destinationDirPath, uniqueName)

    if (!existsSync(destination)) {
      fs.mkdir(destinationDirPath, { recursive: true })
    }

    const targetUser = await prisma.user.findUnique({
      where: { id: id },
    })

    if (!targetUser) {
      return NextResponse.json({
        status: 'error',
        message: 'Failed to upload avatar.',
      })
    }
    console.log(targetUser)
    if (targetUser && targetUser.image && targetUser.path) {
      await deletePhoto(targetUser.path)
    }

    await uploadPhoto(file, destination)
    const updateUser = await prisma.user.update({
      where: { id: id },
      data: {
        image: uniqueName,
        path: destination,
      },
    })

    return NextResponse.json({
      status: 'success',
      updatedUser: updateUser,
    })
  } catch (error: any) {
    let error_response = {
      status: 'error',
      message: error.message,
    }

    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
