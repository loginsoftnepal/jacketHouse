import { writeFile } from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'
import { join } from 'path'
import { existsSync, fstat } from 'fs'
import fs from 'fs/promises'
import { deletePhoto } from '@/lib/utils'

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData()
    const file: File | null = data.get('productPhoto') as unknown as File
    console.log('file upload start')
    if (!file) {
      return NextResponse.json({ success: false })
    }
    console.log(file, file.name)
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    console.log('buffered file')
    const destinationDirPath = join(process.cwd(), 'public/upload')
    const path = join(destinationDirPath, file.name)
    if (!existsSync(destinationDirPath)) {
      fs.mkdir(destinationDirPath, { recursive: true })
    }
    await writeFile(path, buffer)

    console.log('file uploaded successfully')
    return NextResponse.json({ success: true })
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

export async function GET(request: Request) {
  try {
    let json_response = {
      status: 'success',
      data: [],
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

export async function DELETE(request: NextRequest) {
  try {
    const filename = request.nextUrl.searchParams.get('filename')
    if (!filename) {
      return NextResponse.json({
        status: 'success',
        message: 'Image doesnot exist..',
      })
    }

    const filePath = join(process.cwd(), 'public/upload', filename)
    if (!existsSync(filePath)) {
      return NextResponse.json({
        status: 'success',
        message: 'Image not found',
      })
    }

    await deletePhoto(filePath)
    return NextResponse.json({
      status: 'success',
      message: 'Image deleted successfully',
    })
  } catch (error: any) {
    console.log(error)
  }
}
