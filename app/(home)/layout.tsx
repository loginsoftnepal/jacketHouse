import { authOptions } from '@/server/auth'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  console.log(session)

  return <div>{children}</div>
}
