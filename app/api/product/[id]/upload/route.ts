import { NextRequest, NextResponse } from 'next/server'
import { join } from 'path'
import { existsSync } from 'fs'
import fs from 'fs/promises'
import { deletePhoto } from '@/lib/deletePhoto'
import { uploadPhoto } from '@/lib/uploadPhoto'
import { prisma } from '@/server/db'
import { UniqueFileName } from '@/lib/uniqueFileName'

export async function POST(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  try {
    const id = Number(params.id)
    const data = await request.formData()
    const file: File | null = data.get('productPhoto') as unknown as File
    console.log('file upload start')
    if (!file) {
      return NextResponse.json({ success: false })
    }

    const destinationDirPath = join(process.cwd(), 'public/upload')
    const { uniqueName, extension } = UniqueFileName(file.name)
    const destination = join(destinationDirPath, uniqueName)
    if (!existsSync(destination)) {
      fs.mkdir(destinationDirPath, { recursive: true })
    }

    const createProductImage = await prisma.productImage.create({
      data: {
        fileName: uniqueName,
        originalFileName: file.name,
        path: destination,
        productId: id,
      },
    })

    await uploadPhoto(file, destination)
    console.log('file uploaded successfully')
    return NextResponse.json({
      success: true,
      productImage: createProductImage,
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

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  try {
    const id = Number(params.id)

    const productImage = await prisma.productImage.findMany({
      where: {
        productId: id,
      },
    })
    
    let json_response = {
      status: 'success',
      data: productImage,
    }

    return NextResponse.json(json_response)
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  try {
    const id = Number(params.id)
    const fileId = Number(request.nextUrl.searchParams.get('fileId'))
    if (!fileId) {
      return NextResponse.json({
        status: 'failed',
        message: 'Image doesnot exist..',
      })
    }

    const productImage = await prisma.productImage.findUnique({
      where: { id: fileId },
    })
    if (!productImage) {
      return NextResponse.json({
        status: 'failed',
        message: 'Image not available',
      })
    }
    const filePath = productImage.path
    if (!existsSync(filePath)) {
      return NextResponse.json({
        status: 'failed',
        message: 'Image not found',
      })
    }

    await prisma.productImage.delete({
      where: {
        id: productImage.id,
      },
    })

    await deletePhoto(filePath)
    return NextResponse.json({
      status: 'success',
      message: 'Image deleted successfully',
    })
  } catch (error: any) {
    console.log(error.message)
    return NextResponse.json({
      status: 'failed',
      message: error.message,
    })
  }
}
