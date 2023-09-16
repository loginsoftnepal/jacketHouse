import { prisma } from '@/server/db'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const json = await request.json()
    const order = await prisma.order.create({
      data: json,
    })

    let json_response = {
      status: 'success',
      data: {
        order,
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

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  try {
    const id = params.id
    let json = await request.json()
    const order = await prisma.order.update({
      where: {
        id: id,
      },
      data: json,
    })
  } catch (error: any) {
    let error_response = {
      status: 'error',
      message: error.message,
    }

    return NextResponse.json(error_response)
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')

    if (!status) {
      return NextResponse.json({
        status: 'error',
        message: 'status should not be empty',
      })
    }

    const orders = await prisma.order.findMany({
      where: {
        orderStatus: status,
      },
    })

    let json_response = {
      status: 'success',
      results: orders.length,
      orders,
    }

    return NextResponse.json(json_response)
  } catch (error: any) {
    return NextResponse.json({ status: 'error', message: error.message })
  }
}
