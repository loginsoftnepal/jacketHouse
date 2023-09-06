import React from 'react'
import ProfileImage from '../../image/user.png';
import Image from 'next/image'
import Link from 'next/link'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

function NavProfile() {
  return (
    <Link href="/home/protected/profile">
      <Avatar>
      <AvatarImage src={''} alt="@shadcn" />
      <AvatarFallback>
        <Image src={ProfileImage} alt='' />
      </AvatarFallback>
      </Avatar>
    </Link>
  )
}

export default NavProfile
