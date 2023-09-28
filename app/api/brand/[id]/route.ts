import { prisma } from '@/server/db'
import { NextResponse } from 'next/server'

export async function PUT(
  request: Request,
  { params }: { params: { id: number } },
) {
  try {
    const id = Number(params.id)
    let json = await request.json()
   console.log(id);
    const updated_brand = await prisma.brand.update({
      where: { id },
      data: json,
    })

    let json_response = {
      status: 'success',
      data: {
        brand: updated_brand,
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

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } },
) {
  try {
  } catch (error: any) {
    let error_response = {
      status: 'error',
      message: error.message,
    }

    return NextResponse.json(error_response)
  }
}
