import { prisma } from '@/server/db'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: number } },
) {
  const id = params.id

  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  })

  if (!product) {
    let error_response = {
      status: 'fail',
      message: 'No Product with provided ID found?',
    }

    return new NextResponse(JSON.stringify(error_response), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  let json_response = {
    status: 'success',
    data: {
      product,
    },
  }

  return NextResponse.json(json_response)
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: number } },
) {
  try {
    const id = params.id
    let json = await request.json()

    const updated_product = await prisma.product.update({
      where: { id },
      data: json,
    })

    let json_response = {
      status: 'success',
      data: {
        product: updated_product,
      },
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
  request: Request,
  { params }: { params: { id: number } },
) {
  try {
    const id = params.id
    await prisma.product.delete({
      where: { id },
    })

    return new NextResponse(null, { status: 204 })
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
