import { prisma } from '@/server/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const brands = await prisma.brand.findMany()

  let json_response = {
    status: 'success',
    results: brands.length,
    brands,
  }

  return NextResponse.json(json_response)
}

export async function POST(request: NextRequest) {
  try {
    const json = await request.json()
    console.log(json);
    const brand = await prisma.brand.create({
      data: json,
    })

    let json_response = {
      status: 'success',
      data: {
        brand,
      },
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
