import { prisma } from '@/server/db'
import { hash } from 'bcryptjs'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()

    const hashedPassword = await hash(password, 12)

    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: hashedPassword,
      },
    })

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email,
      },
    })
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: 'error',
        message: error.message,
      }),
      { status: 500 },
    )
  }
}
