"use client"
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LayoutGridIcon, MoveLeftIcon, ShirtIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import JacketImage from '../../image/game-icons_moncler-jacket.svg';
import TrackImage from '../../image/ph_pants-fill.svg';
import PantImage from '../../image/Vector 6.svg';
import ShirtImage from '../../image/ri_shirt-fill.svg';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function BrandSidebar() {
   const pathname = usePathname();

  return (
    <div className='basis-[20%] flex flex-col items-center' >
     {/* <div className='py-4 w-full flex justify-center'>
      <Button className='rounded-none py-2 px-4' size={'lg'}>
        <MoveLeftIcon className='mr-2' />
        <span>Back to home</span>
      </Button>
      </div> */}

      <div>
        <div>
            <Badge className='px-4 py-3 mt-4  bg-white shadow-md hover:bg-white text-black'>
                <LayoutGridIcon fill='primary' size={20} />
                <span className='ml-2 text-[16px] text-darkWheat hover:text-black font-semibold uppercase'>ALL BRANDS</span>
            </Badge>
        </div>

         <div className='px-4 py-4'>
            <Link className='flex my-4' href={'/home/brand/jacket'} > 
                <Image src={JacketImage} color='black' alt='' />
                <span className={`ml-4 text-darkWheat font-semibold ${pathname === "/home/brand/jacket" && 'text-red'}`}>Jacket</span>
            </Link>
            <Link className='flex my-4' href={'/home/brand/track'} >
                <Image src={TrackImage} alt='' />
                <span className={`ml-4 font-semibold text-darkWheat ${pathname === "/home/brand/track" && 'text-red'}`}>Track Suite</span>
            </Link>
            <Link href={'/home/brand/tshirt'} className='flex my-4' > 
                <ShirtIcon size={18} className={`${pathname === '/home/brand/tshirt' && 'text-red'}`} />
                <span className={`ml-4 text-darkWheat font-semibold ${pathname === "/home/brand/tshirt" && 'text-red'}`}>T-Shirt</span>
            </Link>
            <Link href={'/home/brand/formal-pants'} className='flex my-4'>
                <Image src={PantImage} alt='' color='red' />
                <span className={`ml-4 text-darkWheat font-semibold first-letter ${pathname === "/home/brand/formal-pants" && 'text-red'}`}>Formal Pants</span>
            </Link>
            <Link href={'/home/brand/shirt'} className='flex my-4'> 
                <Image src={ShirtImage} alt='' />
                <span className={`ml-4 font-semibold text-darkWheat ${pathname === "/home/brand/shirt" && 'text-red'}`}>Shirts</span>
            </Link>
         </div>
      </div>
    </div>
  )
}

export default BrandSidebar;