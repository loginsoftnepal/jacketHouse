import { sendEmail } from '@/lib/mailer'
import { unixTime } from '@/lib/utils'
import { prisma } from '@/server/db'
import { hash } from 'bcryptjs'
import { randomUUID } from 'crypto'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()
    
    const isEmailUsed = await prisma.user.findUnique({
      where: {
        email: email,
      }
    })
 
    if(isEmailUsed && isEmailUsed.emailVerified) {
       throw new Error('Email is already in use.')
    }

    if(isEmailUsed) {
    const verificationToken = await prisma.verificationToken.findMany({
      where: {
        userId: isEmailUsed.id,
      }
    })

    if(verificationToken && verificationToken.length > 0 && (unixTime(new Date(Date.now())) < unixTime(new Date(verificationToken[0].expires)))) {
       throw new Error('Email is already registered, check your email to activate your account.')
    }else {
     const deletedToken = await prisma.verificationToken.delete({
        where: {
            id: verificationToken[0].id
        }
      })

      if(!deletedToken) {
        throw new Error('Failed to register, Try again.')
      }
    }
  }
    const hashedPassword = await hash(password, 12)

    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: hashedPassword,
      },
    })

    const newVerificationToken = await prisma.verificationToken.create({
      data: {
        userId: user.id,
        token: `${randomUUID()}${randomUUID()}`.replace(/-/g, ''),
        expires: new Date(Date.now() * 1000 * 60 * 30)
      }
    })

    const messageData = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: 'Please activate your account.',
      html: `<h5>Hello ${name}}</h5><br />
             <h6>Please activate your account by clicking this link: ${process.env.SERVER_URL}/api/activate/${newVerificationToken.token}</h6>
            `
     }

    await sendEmail(messageData)
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
