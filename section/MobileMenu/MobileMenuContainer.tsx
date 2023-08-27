"use client"
import React from 'react'
import MobileMenu from './MobileMenu'
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'
import { useStore } from '@/store/useStore'
import CartItem from '../CartItem/CartItem'
import { Button } from '@/components/ui/button'
import CartSvg from '../../image/Group 3.svg'

function MobileMenuContainer() {

    const { cart } = useStore()

  return (
      <div className='gap-3 flex'>
     <div className="relative lg:hidden">
        <Sheet>
          <SheetTrigger>
         {/* <ShoppingBag color="#000000" strokeWidth={1.75} /> */}
         <Image src={CartSvg} alt='' />
        {/* <div className=""> */}
          <span className='text-[5px] text-white absolute -top-2 -right-2  rounded-full bg-red pl-[4px] pr-[3px] py-[1px]'>{cart && cart.length > 0 ? cart.length : 0 }</span>
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

      <MobileMenu />
       </div> 
  )
}

export default MobileMenuContainer