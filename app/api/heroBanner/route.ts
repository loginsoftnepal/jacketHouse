import { deletePhoto } from '@/lib/deletePhoto'
import { UniqueFileName } from '@/lib/uniqueFileName'
import { uploadPhoto } from '@/lib/uploadPhoto'
import { prisma } from '@/server/db'
import { existsSync, fstat } from 'fs'
import fs from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'
import { join } from 'path'

export async function GET(request: NextRequest) {
  try {
    const heroBanner = await prisma.heroBanner.findMany()
    let json_response = {
      status: 'success',
      results: heroBanner.length,
      heroBanner,
    }

    return NextResponse.json(json_response)
  } catch (error: any) {
    let error_response = {
      status: 'error',
      message: error.message,
    }
    return NextResponse.json(error_response)
  }
}

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.formData();
    const file: File | null = data.get('heroBanner') as unknown as File;

    if (!file) {
      return NextResponse.json({
        success: false,
        message: 'Failed to upload file.',
      })
    }

    const destinationDirPath = join(process.cwd(), 'public/heroBanner')
    const { uniqueName, extension } = UniqueFileName(file.name)
    const destination = join(destinationDirPath, uniqueName)
    if (!existsSync(destination)) {
      fs.mkdir(destinationDirPath, { recursive: true })
    }
    const createHeroBanner = await prisma.heroBanner.create({
      data: {
        fileName: uniqueName,
        originalFileName: file.name,
        path: destination,
      },
    })
    await uploadPhoto(file, destination)
    return NextResponse.json({ success: true, productImage: createHeroBanner })
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

export async function DELETE(request: NextRequest) {
  try {
    const fileId = Number(request.nextUrl.searchParams.get('fileId'))
    if (!fileId) {
      return NextResponse.json({
        status: 'failed',
        message: 'heroBanner doesnot exist...',
      })
    }

    const heroBanner = await prisma.heroBanner.findUnique({
      where: { id: fileId },
    })
    if (!heroBanner) {
      return NextResponse.json({
        status: 'failed',
        message: 'image not available',
      })
    }

    const filePath = heroBanner.path
    if (!existsSync(filePath)) {
      return NextResponse.json({
        status: 'failed',
        message: 'Image not found',
      })
    }

    await prisma.heroBanner.delete({
      where: {
        id: heroBanner.id,
      },
    })

    await deletePhoto(filePath)
    return NextResponse.json({
      status: 'success',
      message: 'Image deleted successfully.',
    })
  } catch (error: any) {
    console.log(error.message)
    return NextResponse.json({
      status: 'failed',
      message: error.message,
    })
  }
}
