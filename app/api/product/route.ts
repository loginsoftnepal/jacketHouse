import { prisma } from '@/server/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const page_str = request.nextUrl.searchParams.get('page')
  const limit_str = request.nextUrl.searchParams.get('limit')

  const page = page_str ? parseInt(page_str, 10) : 1
  const limit = limit_str ? parseInt(limit_str, 10) : 10
  const skip = (page - 1) * limit

  const products = await prisma.product.findMany({
    include: {
      category: true,
      brand: true,
      image: true,
    }
  })

  let json_response = {
    status: 'success',
    results: products.length,
    products,
  }

  return NextResponse.json(json_response)
}

export async function POST(request: Request) {
  try {
    const json = await request.json()

    const product = await prisma.product.create({
      data: {
        ...json,
        category: { connect: {id: Number(json.category)}},
        brand: { connect: {id: Number(json.brand)}},
    }});

    let json_response = {
      status: 'success',
      data: {
        product
      },
    }

    return new NextResponse(JSON.stringify(json_response), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
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
