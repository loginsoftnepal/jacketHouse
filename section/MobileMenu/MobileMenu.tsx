"use client"
import React, { useState } from 'react'
import { AlignJustify } from 'lucide-react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavItem from '../NavItem/NavItem';
import User from '../../image/ion_person-outline.svg';
import { CloseOutlined } from '@ant-design/icons';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { signIn } from 'next-auth/react'

function MobileMenu() {

    const [showMenu, setShowMenu] = useState(false);
    const pathname = usePathname();

  return (
    <div className='inline-block lg:hidden relative'> 

     <div className={`${showMenu ? "flex flex-col" : "hidden" } z-10 fixed top-0 right-0 w-[100vw] h-full bg-white overflow-auto`}>
        <div className='w-full px-2 flex justify-end my-2'><CloseOutlined onClick={() => setShowMenu((prev) => !prev)} /></div>
      <div className='flex justify-between'>
      <div className="flex flex-col px-4 gap-y-3 py-4">
      <div className={`h-full flex items-center relative`}>

        <Link href={'/'} className={`${pathname === '/' ? 'text-primary' : 'text-darkWheat'} font-semibold`}  >Home</Link>
      </div>

      <div className={`h-full flex items-center relative`}>
        <Link href={'/home/shop/jacket'} className={`${pathname.split('/').includes("shop") ? 'text-primary' : 'text-darkWheat'} font-semibold`} >Our Shop</Link>
      </div>

      <div className={`h-full flex items-center relative`}>
        <Link href={'/home/brand/jacket'} className={`${pathname.split('/').includes("brand") ? 'text-primary' : 'text-darkWheat'} font-semibold`} >Our Brands</Link>
      </div>

      <div className={`h-full flex items-center relative`}>
        <Link href={'/home/location'} className={`${pathname === '/home/location' ? 'text-primary' : 'text-darkWheat'} font-semibold`}>Our Locations</Link>
      </div>

           <div>
        <Button variant={'link'} className='px-0 py-0' onClick={() => signIn()}>
          {`Login`}
        </Button>
      </div>

    </div>
     {/* <NavItem hidden={false} /> */}
     </div>
    </div>

     <div className='z-40'><AlignJustify onClick={() => setShowMenu((prev) => !prev)} /></div>
    </div>
  )
}

export default MobileMenu;