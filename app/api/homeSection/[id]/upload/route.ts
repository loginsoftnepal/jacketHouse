import { UniqueFileName } from '@/lib/uniqueFileName'
import { existsSync } from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import { join } from 'path'
import fs from 'fs/promises'
import { prisma } from '@/server/db'
import { uploadPhoto } from '@/lib/uploadPhoto'
import { deletePhoto } from '@/lib/deletePhoto'

export async function POST(
  request: NextResponse,
  { params }: { params: { id: number } },
) {
  try {
    const id = Number(params.id)
    const data = await request.formData()
    const file: File | null = data.get('homeSectionPhoto') as unknown as File
    if (!file) {
      return NextResponse.json({ success: false })
    }

    const destinationDirPath = join(process.cwd(), 'public/homeSection')
    const { uniqueName, extension } = UniqueFileName(file.name)
    const destination = join(destinationDirPath, uniqueName)

    if (!existsSync(destination)) {
      fs.mkdir(destinationDirPath, { recursive: true })
    }

    const homeSection = await prisma.homeSection.findUnique({
      where: {
        id,
      },
    })

    if (!homeSection) {
      let error_response = {
        status: 'fail',
        message: 'No homeSection with provided ID found?',
      }

      return new NextResponse(JSON.stringify(error_response), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    homeSection.fileName = uniqueName
    homeSection.path = destination

    const updated_homeSection = await prisma.homeSection.update({
      where: { id },
      data: homeSection,
    })

    await uploadPhoto(file, destination)
    return NextResponse.json({
      success: true,
      homeSection: updated_homeSection,
    })
  } catch (error: any) {
    let error_response = {
      status: 'error',
      error: error.message,
    }

    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  try {
    const id = Number(params.id)

    const homeSection = await prisma.homeSection.findUnique({
      where: { id },
    })

    if (!homeSection) {
      return NextResponse.json({
        status: 'failed',
        message: 'Image not available',
      })
    }

    const filePath = homeSection.path

    homeSection.fileName = ''
    homeSection.path = ''

    const updated_homeSection = await prisma.homeSection.update({
      where: { id },
      data: homeSection,
    })

    if (existsSync(filePath)) {
      await deletePhoto(filePath)
    }

    return NextResponse.json({
      status: 'success',
      message: 'Image deleted successfully',
    })
  } catch (error: any) {
    return NextResponse.json({
      status: 'failed',
      message: error.message,
    })
  }
}
