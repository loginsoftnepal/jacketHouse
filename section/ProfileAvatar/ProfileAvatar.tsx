'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import ProfileImage from '../../image/user.png'
import { Button } from '@/components/ui/button'
import { UserCircle } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useSession } from 'next-auth/react'
import { apiUploadAvatar } from '@/app/api-request/userCalls'
import { getServerAuthSession } from '@/server/auth'

interface IProfileAvatar {
  image: string | null | undefined
}

function ProfileAvatar({ image }: IProfileAvatar) {
  const InpRef = useRef<null | HTMLInputElement>(null)
  const session = useSession()
  const [avatar, setAvatar] = useState<File | null>(null)
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    if (InpRef && InpRef.current) {
      InpRef.current.click()
    }
  }

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAvatar(e.target.files[0])
      setOpen(true)
    }
  }

  const handleSave = async () => {
    if (!avatar) return
    try {
      const updatedUser = await apiUploadAvatar({
        file: avatar,
        id: (session && (session.data?.user as any)).id,
      })
      console.log(updatedUser)
      await session.update({
        ...session.data,
        user: {
          ...session.data?.user,
          image: updatedUser.image,
        },
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="py-2">
        <Avatar className="w-[150px] h-[150px]">
          <AvatarImage
            src={
              avatar
                ? URL.createObjectURL(avatar)
                : `${process.env.NEXT_PUBLIC_SERVER_URL}/api/file/avatar?filename=${image}`
            }
            alt="@shadcn"
          />
          <AvatarFallback>
            <Image src={ProfileImage} alt="" />
          </AvatarFallback>
        </Avatar>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">User avatar</DialogTitle>
          </DialogHeader>
          <div className="flex justify-center">
            <Avatar className="w-[250px] h-[250px]">
              <AvatarImage
                src={avatar ? URL.createObjectURL(avatar) : ''}
                alt="@shadcn"
              />
              <AvatarFallback>
                <Image src={ProfileImage} alt="" />
              </AvatarFallback>
            </Avatar>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleSave}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div>
        <Button variant={'outline'} onClick={handleClick}>
          <UserCircle />
          <span className="mx-2">Change picture</span>
        </Button>
        <input
          onChange={handleAvatarChange}
          className="hidden"
          type="file"
          ref={InpRef}
        />
      </div>
    </div>
  )
}

export default ProfileAvatar
