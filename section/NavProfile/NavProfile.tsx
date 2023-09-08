"use client"
import React from 'react'
import ProfileImage from '../../image/user.png';
import Image from 'next/image'
import Link from 'next/link'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { LogOut, ShoppingBasket, User, WrenchIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

function NavProfile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
      <Avatar className='w-8 h-8'>
      <AvatarImage src={''} alt="@shadcn" />
      <AvatarFallback>
        <Image src={ProfileImage} alt='' />
      </AvatarFallback>
      </Avatar>
     </DropdownMenuTrigger>
     <DropdownMenuContent>
       <DropdownMenuItem>
          <User size={15} className='mr-2' />
          <Link href={'/home/protected/profile'} >Profile</Link>
       </DropdownMenuItem>
        <DropdownMenuItem>
          <ShoppingBasket size={15} className='mr-2' />
          <Link href={'/home/protected/sales'}>Sales</Link>
       </DropdownMenuItem>
       <DropdownMenuItem>
          <WrenchIcon size={15} className='mr-2' />
          <Link href={'/home/protected/settings'}>Settings</Link>
       </DropdownMenuItem>
         <DropdownMenuItem>
          <Button className='w-full h-5 py-0 px-0 flex justify-start' variant={'ghost'} onClick={() => signOut()}>
          <LogOut size={15} className='mr-2' />
          <span className=''>Logout</span>
          </Button>
       </DropdownMenuItem>
     </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NavProfile
