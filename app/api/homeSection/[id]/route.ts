import { prisma } from '@/server/db'
import { Product } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function PUT(
  request: Request,
  { params }: { params: { id: number } },
) {
  try {
    const id = Number(params.id);
    const json = await request.json()

    const updated_homeSection = await prisma.homeSection.update({
      where: { id },
      data: {...json, products: {
        connect: json.products.map((product: Product) => {
          return { id: Number(product.id)}
        })
      }},
    })

    let json_response = {
      status: 'success',
      data: {
        homeSection: updated_homeSection,
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
      headers: { 'Content-Type': 'application/json ' },
    })
  }
}


export async function GET(
  request: Request,
  { params }: { params: { id: number } },
) {
  try {
    const id = Number(params.id);

    const homeSection = await prisma.homeSection.findUnique({
      where: { id }, 
    })

    let json_response = {
      status: 'success',
      data: {
        homeSection: homeSection,
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
      headers: { 'Content-Type': 'application/json ' },
    })
  }
}


export async function DELETE(
  request: Request,
  { params }: { params: { id: number } },
) {
  try {
    const id = params.id
    await prisma.homeSection.delete({
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
