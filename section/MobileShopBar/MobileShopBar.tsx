'use client'
import React, { useState } from 'react'
import Carousel from '../Carousel/Carousel'
import Link from 'next/link'
import { GiArmoredPants, GiMonclerJacket } from 'react-icons/gi'
import { PiPantsFill } from 'react-icons/pi'
import { usePathname } from 'next/navigation'
import { FaTshirt } from 'react-icons/fa'
import { RiShirtFill } from 'react-icons/ri'
import { Badge } from '@/components/ui/badge'

function MobileShopBar() {
  const pathname = usePathname()

  return (
    <div className="basis-[90%] mx-auto flex lg:hidden">
      <Carousel loop>
        <div className="flex flex-[0_0_30%]">
          <Link
            className="flex my-4 basis-[100%] items-center "
            href={'/home/shop/jacket'}
          >
            {/* <Image src={JacketImage} color='black' alt='' /> */}
            <GiMonclerJacket
              color={`${pathname === '/home/shop/jacket' ? 'red' : 'black'}`}
            />
            <span
              className={`ml-2 text-sm lg:text-lg text-darkWheat font-semibold ${
                pathname === '/home/shop/jacket' && 'text-red'
              }`}
            >
              Jacket
            </span>
          </Link>
        </div>
        <div className="flex flex-[0_0_30%]">
          <Link
            className="flex basis-[100%] my-4 items-center"
            href={'/home/shop/track'}
          >
            {/* <Image src={TrackImage} alt='' /> */}
            <PiPantsFill
              color={`${pathname === '/home/shop/track' ? 'red' : 'black'}`}
            />
            <span
              className={`ml-2 text-sm lg:text-lg font-semibold text-darkWheat ${
                pathname === '/home/shop/track' && 'text-red'
              }`}
            >
              Track Suite
            </span>
          </Link>
        </div>
        <div className="flex flex-[0_0_30%]">
          <Link
            href={'/home/shop/tshirt'}
            className="flex basis-[100%] my-4 items-center"
          >
            <FaTshirt
              size={18}
              color={`${pathname === '/home/shop/tshirt' ? 'red' : 'black'}`}
            />
            <span
              className={`ml-2 text-sm lg:text-lg text-darkWheat font-semibold ${
                pathname === '/home/shop/tshirt' && 'text-red'
              }`}
            >
              T-Shirt
            </span>
          </Link>
        </div>
        <div className="flex flex-[0_0_30%]">
          <Link
            href={'/home/shop/formal-pants'}
            className="flex my-4 basis-[100%] items-center"
          >
            <GiArmoredPants
              color={`${
                pathname === '/home/shop/formal-pants' ? 'red' : 'black'
              }`}
            />
            <span
              className={`ml-2 text-sm lg:text-lg text-darkWheat font-semibold ${
                pathname === '/home/shop/formal-pants' && 'text-red'
              }`}
            >
              Formal Pants
            </span>
          </Link>
        </div>
        <div className="flex flex-[0_0_30%]">
          <Link
            href={'/home/shop/shirts'}
            className="flex basis-[100%] my-4 items-center"
          >
            {/* <Image src={ShirtImage} alt='' /> */}
            <RiShirtFill
              size={18}
              color={`${pathname === '/home/shop/shirts' ? 'red' : 'black'}`}
            />
            <span
              className={`ml-2 text-sm lg:text-lg font-semibold text-darkWheat ${
                pathname === '/home/shop/shirts' && 'text-red'
              }`}
            >
              Shirts
            </span>
          </Link>
        </div>
      </Carousel>
    </div>
  )
}
export default MobileShopBar
