import Image from 'next/image'
import React from 'react'
import ProfileImage from '../../image/user.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { authOptions } from '@/server/auth'
import { getServerSession } from 'next-auth'

async function SidebarProfileInfo() {
  const session = await getServerSession(authOptions)
  console.log('serverside', session?.user)
  return (
    <div className="w-full px-2 py-4 border-b-[1px] border-b-[rgba(0,0,0,0.2)] bg:white flex justify-around items-center">
      <Avatar>
        <AvatarImage src={`/avatar/${session?.user?.image}`} alt="" />
        <AvatarFallback>
          <Image
            src={ProfileImage}
            className="w-full h-full object-cover object-center"
            alt=""
          />
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col basis-[50%]">
        <h3 className="font-semibold">{session?.user?.name} 🖐</h3>
        <h5 className="text-sm">{session?.user?.email}</h5>
      </div>
      <div className="flex items-center">
        <MdOutlineKeyboardArrowRight />
      </div>
    </div>
  )
}

export default SidebarProfileInfo
