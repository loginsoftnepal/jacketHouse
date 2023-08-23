"use client"
import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useStore } from '@/store/useStore'
import {
  LayoutGrid,
} from 'lucide-react'
import React from 'react'
import CartItem from '../CartItem/CartItem'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import CartSvg from '../../image/Group 3.svg';
import User from '../../image/ion_person-outline.svg';

function NavItem() {

  const { cart } = useStore();

  return (
    <div className="flex justify-between basis-[15%] w-full items-center ">
      <div className="relative">
        <Sheet>
          <SheetTrigger>
         {/* <ShoppingBag color="#000000" strokeWidth={1.75} /> */}
         <Image src={CartSvg} alt='' />
        {/* <div className=""> */}
          <span className='text-[8px] text-white absolute -top-2 -right-2  rounded-full bg-red pl-[4px] pr-[3px] py-[1px]'>{cart && cart.length > 0 ? cart.length : 0 }</span>
        {/* </div> */}
         </SheetTrigger>
         <SheetContent>
          <SheetHeader>
       <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
         <div className='cartItem w-full h-[85vh] overflow-y-auto pr-2 pb-2'>
          {
            cart && cart.length > 0 ? (
               cart.map((item, index) => <CartItem key={index} item={item} />)
            ) : (
              <div className='w-full text-center my-8'>Cart is empty.</div>
            )
          }
          </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button className='w-full' type="submit">CheckOut</Button>
          </SheetClose>
        </SheetFooter>
         </SheetContent>
        </Sheet>
      </div>

      <div>
        <Button variant={'default'} className="rounded-3xl py-2" onClick={() => signIn()}>
          <Image alt='' src={User} className='mr-2' width={20} />
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
