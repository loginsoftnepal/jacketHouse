"use client"
import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Image from 'next/image'
import CartSvg from '../../image/Group 3.svg'
import { useStore } from '@/store/useStore'
import CartItem from '../CartItem/CartItem'
import { Button } from '@/components/ui/button'
import { Session } from 'next-auth'
import NavProfile from '../NavProfile/NavProfile'
import { signIn } from 'next-auth/react'
import { User } from 'lucide-react'

interface NavItemProps {
  session: Session | null;
}
function NavItem({session}: NavItemProps) {

  const { cart } = useStore()

  return (  
  <div className={`hidden lg:flex justify-around lg:justify-center basis-[50%] lg:basis-[15%] 2xl:basis-[10%] w-full items-center`}
    >
     <div className="relative mx-4 2xl:mx-4 lg:mt-2">
        <Sheet>
          <SheetTrigger>
            {/* <ShoppingBag color="#000000" strokeWidth={1.75} /> */}
            <Image src={CartSvg} alt="" />
            {/* <div className=""> */}
            <span className="text-[8px] text-white absolute -top-2 -right-2  rounded-full bg-red pl-[4px] pr-[3px] py-[1px]">
              {cart && cart.length > 0 ? cart.length : 0}
            </span>
            {/* </div> */}
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Cart</SheetTitle>
            </SheetHeader>
            <div className="cartItem w-full h-[85vh] overflow-y-auto pr-2 pb-2">
              {cart && cart.length > 0 ? (
                cart.map((item, index) => <CartItem key={index} item={item} />)
              ) : (
                <div className="w-full text-center my-8">Cart is empty.</div>
              )}
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button className="w-full" type="submit">
                  CheckOut
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <div>
        {session && session ? (
          <NavProfile />
        ) : (
          <Button
            variant={'default'}
            className="rounded-3xl py-2"
            onClick={() => signIn()}
          >
            <User />
            {`Login`}
          </Button>
        )}
      </div>
      </div>
  )
}

export default NavItem;