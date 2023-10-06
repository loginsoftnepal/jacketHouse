import { prisma } from '@/server/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const category = await prisma.category.findMany()

  let json_response = {
    status: 'success',
    results: category.length,
    category,
  }

  return NextResponse.json(json_response)
}

export async function POST(request: NextRequest) {
  try {
    const json = await request.json()
    console.log(json);
    const category = await prisma.category.create({
      data: json,
    })

    let json_response = {
      status: 'success',
      data: {
        category,
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
