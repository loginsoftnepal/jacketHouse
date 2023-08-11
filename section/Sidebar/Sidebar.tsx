
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LayoutGridIcon, MoveLeftIcon, ShirtIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

function Sidebar() {

  return (
    <div className='basis-[20%] flex flex-col items-center' >
     <div className='py-4 w-full flex justify-center'>
      <Button className='rounded-none py-2 px-4' size={'lg'}>
        <MoveLeftIcon className='mr-2' />
        <span>Back to home</span>
      </Button>
      </div>

      <div>
        <div>
            <Badge className='px-4 py-2 bg-white shadow-md hover:bg-white text-black'>
                <LayoutGridIcon fill='primary' size={20} />
                <span className='ml-2 text-[16px] text-darkWheat hover:text-black font-semibold uppercase'>ALL CATEGORIES</span>
            </Badge>
        </div>

         <div className='px-4 py-4'>
            <Link className='flex my-4' href={'#'} >
                <ShirtIcon />
                <span className='ml-4 text-darkWheat font-semibold'>Jacket</span>
            </Link>
            <Link className='flex my-4' href={'#'} >
                <ShirtIcon />
                <span className='ml-4 font-semibold text-darkWheat'>Track Suite</span>
            </Link>
            <Link href={'#'} className='flex my-4' >
                <ShirtIcon />
                <span className='ml-4 text-darkWheat font-semibold'>T-Shirt</span>
            </Link>
            <Link href={'#'} className='flex my-4'>
                <ShirtIcon />
                <span className='ml-4 text-darkWheat font-semibold'>Formal Pants</span>
            </Link>
            <Link href={'#'} className='flex my-4'>
                <ShirtIcon />
                <span className='ml-4 font-semibold text-darkWheat'>Shirts</span>
            </Link>
         </div>
      </div>
    </div>
  )
}

export default Sidebar;