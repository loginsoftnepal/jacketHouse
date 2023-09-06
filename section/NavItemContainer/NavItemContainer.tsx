import React from 'react'
import NavItem from '../NavItem/NavItem'
import { Session, getServerSession } from 'next-auth'
import { authOptions } from '@/server/auth'

interface PropsType {
  hidden?: boolean
}

const getSession = async () => {
  return await getServerSession(authOptions)
}

async function NavItemContainer(props: PropsType) {
   const session = await getSession();

   return (
      <div>
         <NavItem session={session} />
      </div>
  )
}

export default NavItemContainer;
