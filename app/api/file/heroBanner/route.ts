import { existsSync, readFileSync } from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import { join } from 'path'

export function GET(req: NextRequest) {
  const filename = req.nextUrl.searchParams.get('filename')
  console.log('inside the hero banner', filename)
  const filePath = join(process.cwd(), 'public/heroBanner', filename!)

  if (!existsSync(filePath)) {
    console.log(filePath)
    return NextResponse.json({
      status: 'success',
      message: 'Image not found',
    })
  }

  const file = readFileSync(filePath)
  const response = new NextResponse(file)
  response.headers.set('Content-Type', 'image/png')
  console.log(response)
  return response
}
