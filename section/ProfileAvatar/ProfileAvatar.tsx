import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'
import React from 'react'
import ProfileImage from '../../image/user.png';
import { Button } from '@/components/ui/button';
import { UserCircle } from 'lucide-react';

function ProfileAvatar() {

  return (

    <div className='flex flex-col items-center'>
     <div className='py-2'>
    <Avatar className='w-[150px] h-[150px]'>
      <AvatarImage src={''} alt="@shadcn" />
      <AvatarFallback>
        <Image src={ProfileImage} alt='' />
      </AvatarFallback>
      </Avatar>
      </div>
      <div>
        <Button variant={'outline'}>
          <UserCircle />
         <span className='mx-2'>Change picture</span> 
        </Button>
      </div>
    </div>
  )
}

export default ProfileAvatar