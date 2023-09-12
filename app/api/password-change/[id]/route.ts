import { prisma } from '@/server/db'
import { compare, hash } from 'bcryptjs'
import { NextRequest, NextResponse } from 'next/server'

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } },
) {
  try {
    const id = Number(params.id)
    const data = await req.json()
    if (data.newPassword !== data.confirmPassword) {
      return NextResponse.json({
        status: 'error',
        message: 'new password and confirm password must match.',
      })
    }
    const targetUser = await prisma.user.findUnique({
      where: { id },
    })

    if (!targetUser) {
      return NextResponse.json(
        { status: 'error', message: 'Invalid userId' },
        { status: 404 },
      )
    }
    const isMatched = await compare(
      data.oldPassword,
      targetUser?.password as string,
    )

    if (!isMatched) {
      return NextResponse.json(
        { status: 'error', message: 'Invalid old password' },
        { status: 400 },
      )
    }
    const hashedPassword = await hash(data.newPassword, 12)
    const updated_password = await prisma.user.update({
      where: { id },
      data: { password: hashedPassword },
    })

    if (!updated_password) {
      return NextResponse.json(
        { status: 'error', message: 'Failed to update Password' },
        { status: 400 },
      )
    }
    return NextResponse.json(
      { status: 'success', message: 'Password updated Successfully' },
      { status: 200 },
    )
  } catch (error: any) {
    return NextResponse.json(
      { status: 'error', message: error.message },
      { status: 500 },
    )
  }
}
