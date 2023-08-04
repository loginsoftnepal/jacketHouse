
import { Button } from '@/components/ui/button'
import { AppWindow, LayoutGrid, ShoppingBag, ShoppingCart, SquareDashedBottom, Store, StoreIcon, User } from 'lucide-react'
import React from 'react'

function NavItem() {

  return (
    <div className='flex justify-between basis-[15%] w-full items-center '>
        <div className='relative'>
            <ShoppingBag  color="#000000" strokeWidth={1.75} />
            <div className='absolute -top-1 -right-1 h-[8px] w-[8px] rounded-[50%] bg-red'></div>
        </div>

        <div>
            <Button variant={'default'} className='rounded-3xl'><User size={20} className='mr-2' />{`Login`}</Button>
        </div>

        <div>
           <LayoutGrid color="#000000" fill='#0f0f0f' strokeWidth={1.75} />
        </div>
    </div>
  )
}

export default NavItem