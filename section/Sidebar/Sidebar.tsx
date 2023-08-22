"use client"
import { Badge } from '@/components/ui/badge';
import { LayoutGridIcon, MoveLeftIcon, ShirtIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import JacketImage from '../../image/game-icons_moncler-jacket.svg';
import TrackImage from '../../image/ph_pants-fill.svg';
import PantImage from '../../image/Vector 6.svg';
import ShirtImage from '../../image/ri_shirt-fill.svg';
import Image from 'next/image';

function Sidebar() {

  const pathname = usePathname()

  return (
    <div className='basis-[20%] flex flex-col items-center' >
     {/* <div className='py-4 w-full flex justify-center'>
      <Button className='rounded-none py-2 px-4' size={'lg'}>
        <MoveLeftIcon className='mr-2' />
        <span>Back to home</span>
      </Button>
      </div> */}

      <div className='mt-[20px]'>
        <div>
            <Badge className='px-4 py-3 bg-white shadow-md hover:bg-white text-black'>
                <LayoutGridIcon fill='primary' size={20} />
                <span className='ml-2 text-[16px] text-darkWheat hover:text-black font-semibold uppercase'>ALL CATEGORIES</span>
            </Badge>
        </div>

         <div className='px-4 py-4'>
            <Link className='flex my-4' href={'/home/shop/jacket'} >
                <Image src={JacketImage} color='black' alt='' />
                <span className={`ml-4 text-darkWheat font-semibold ${pathname === '/home/shop/jacket' && 'text-red'}`}>Jacket</span>
            </Link>
            <Link className='flex my-4' href={'/home/shop/track'} >
                <Image src={TrackImage} alt='' />
                <span className={`ml-4 font-semibold text-darkWheat ${pathname === '/home/shop/track' && 'text-red'}`}>Track Suite</span>
            </Link>
            <Link href={'/home/shop/tshirt'} className='flex my-4' >
                <ShirtIcon size={18} className={`${pathname === '/home/shop/tshits' && 'text-red'}`} />
                <span className={`ml-4 text-darkWheat font-semibold ${pathname === '/home/shop/tshirt' && 'text-red'}`}>T-Shirt</span>
            </Link>
            <Link href={'/home/shop/formal-pants'} className='flex my-4'>
                <Image src={PantImage} alt='' color='red' />
                <span className={`ml-4 text-darkWheat font-semibold ${pathname === '/home/shop/formal-pants' && 'text-red'}`}>Formal Pants</span>
            </Link>
            <Link href={'/home/shop/shirts'} className='flex my-4'>
                <Image src={ShirtImage} alt='' />
                <span className={`ml-4 font-semibold text-darkWheat ${pathname === '/home/shop/shirts' && 'text-red'}`}>Shirts</span>
            </Link>
         </div>
      </div>
    </div>
  )
}

export default Sidebar;