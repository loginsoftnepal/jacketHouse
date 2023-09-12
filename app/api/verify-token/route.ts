import { prisma } from '@/server/db'
import { hash } from 'bcryptjs'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: Request) {
  const data = await req.json()
  const { token, userId, newPassword, confirmPassword } = data

  const forgetPassword = await prisma.forgetPasswordToken.findFirst({
    where: {
      AND: [
        {
          userId: userId,
        },
        {
          token: token,
        },
      ],
    },
  })

  if (!forgetPassword) {
    return NextResponse.json({ success: false, message: 'Invalid link' })
  }

  if (confirmPassword !== newPassword) {
    return NextResponse.json({
      success: false,
      message: 'Password does not match.',
    })
  }

  const deletedForgetPassword = await prisma.forgetPasswordToken.deleteMany({
    where: {
      AND: [
        {
          userId: userId,
        },
        {
          token: token,
        },
      ],
    },
  })

  const hashedPassword = await hash(newPassword, 12)

  const updated_user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      password: hashedPassword,
    },
  })
  console.log(updated_user)
  return NextResponse.json({ success: true, message: 'successfully done!' })
}
