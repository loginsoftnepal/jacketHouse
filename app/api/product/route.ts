import { prisma } from '@/server/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const page_str = request.nextUrl.searchParams.get('page')
  const limit_str = request.nextUrl.searchParams.get('limit')

  const page = page_str ? parseInt(page_str, 10) : 1
  const limit = limit_str ? parseInt(limit_str, 10) : 10
  const skip = (page - 1) * limit

  console.log('we are here');
  const products = await prisma.product.findMany({
    skip,
    take: limit,
  })
  
console.log(products);
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
      data: json,
    })

    let json_response = {
      status: 'success',
      data: {
        product,
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
