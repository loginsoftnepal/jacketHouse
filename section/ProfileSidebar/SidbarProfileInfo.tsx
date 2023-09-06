'use client'
import Image from 'next/image'
import React from 'react'
import ProfileImage from '../../image/user.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

function SidebarProfileInfo() {
  return (
    <div className="w-full px-2 py-4 border-b-[1px] border-b-[rgba(0,0,0,0.2)] bg:white flex justify-around items-center">
       <Avatar>
         <AvatarImage src='' alt='' />
         <AvatarFallback>
        <Image
          src={ProfileImage}
          className="w-full h-full object-cover object-center"
          alt=""
        />
        </AvatarFallback>
        </Avatar>
      <div className="flex flex-col basis-[50%]">
        <h3 className="font-semibold">Username 🖐</h3>
        <h5 className="text-sm">admin@gmail.com</h5>
      </div>
      <div className="flex items-center">
        <MdOutlineKeyboardArrowRight />
      </div>
    </div>
  )
}

export default SidebarProfileInfo
