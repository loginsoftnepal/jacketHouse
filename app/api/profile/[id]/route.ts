import { prisma } from '@/server/db'
import { NextRequest, NextResponse } from 'next/server'

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } },
) {
  try {
    const id = Number(params.id)
    const data = await req.json()
    const updated_profile = await prisma.user.update({
      where: { id },
      data: data,
    })

    if (!updated_profile) {
      return NextResponse.json(
        { status: 'error', message: 'Failed to update profile.' },
        { status: 400 },
      )
    }

    return NextResponse.json(
      { status: 'success', profile: updated_profile },
      { status: 200 },
    )
  } catch (error: any) {
    return NextResponse.json(
      { status: 'error', message: error.message },
      { status: 500 },
    )
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } },
) {
  const id = Number(params.id)

  const profile = await prisma.user.findUnique({
    where: {
      id: id,
    },
  })

  if (!profile) {
    return NextResponse.json(
      { status: 'error', message: 'Profile not found' },
      { status: 404 },
    )
  }
 let profileDto = {
   id: profile.id,
   username: profile.name,
   fullname: profile.fullname,
   email: profile.email,
   phone: profile.phone,
   address1: profile.address1,
   address2: profile.address2
 }
  return NextResponse.json(
    { status: 'success', profile: profileDto },
    { status: 200 },
  )
}
