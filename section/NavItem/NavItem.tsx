"use client"
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import {
  AppWindow,
  LayoutGrid,
  ShoppingBag,
  ShoppingCart,
  SquareDashedBottom,
  Store,
  StoreIcon,
  User,
} from 'lucide-react'
import React from 'react'
import { signIn, signOut } from "next-auth/react";
import CredentialsProvider  from 'next-auth/providers/credentials'

function NavItem() {
  return (
    <div className="flex justify-between basis-[15%] w-full items-center ">
      <div className="relative">
        <Sheet>
          <SheetTrigger>
        <ShoppingBag color="#000000" strokeWidth={1.75} />
        <div className="absolute -top-1 -right-1 h-[8px] w-[8px] rounded-[50%] bg-red"></div>
         </SheetTrigger>
         <SheetContent>
            <SheetHeader>
      <SheetTitle>Cart</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
         </SheetContent>
        </Sheet>
      </div>

      <div>
        <Button variant={'default'} className="rounded-3xl" onClick={() => signIn()}>
          <User size={20} className="mr-2" />
          {`Login`}
        </Button>
      </div>

      <div>
        <LayoutGrid color="#000000" fill="#0f0f0f" strokeWidth={1.75} />
      </div>
    </div>
  )
}

export default NavItem
