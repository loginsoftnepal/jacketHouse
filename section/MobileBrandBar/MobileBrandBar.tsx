'use client'
import React from 'react'
import Carousel from '../Carousel/Carousel'
import Link from 'next/link'
import { GiArmoredPants, GiMonclerJacket } from 'react-icons/gi'
import { usePathname } from 'next/navigation'
import { PiPantsFill } from 'react-icons/pi'
import { FaTshirt } from 'react-icons/fa'
import { RiShirtFill } from 'react-icons/ri'

function MobileBrandBar() {
  const pathname = usePathname()

  return (
    <div className="basis-[90%] mx-auto flex lg:hidden">
      <Carousel loop>
        <div className="flex flex-[0_0_30%]">
          <Link
            className="flex basis-[100%] my-4 items-center"
            href={'/home/brand/jacket'}
          >
            <GiMonclerJacket
              color={`${pathname === '/home/brand/jacket' ? 'red' : 'black'}`}
            />
            <span
              className={`ml-2 lg:ml-4 text-sm md:text-md lg:text-lg text-darkWheat font-semibold ${
                pathname === '/home/brand/jacket' && 'text-red'
              }`}
            >
              Jacket
            </span>
          </Link>
        </div>

        <div className="flex flex-[0_0_30%]">
          <Link
            className="flex my-4 basis-[100%] items-center"
            href={'/home/brand/track'}
          >
            <PiPantsFill
              color={`${pathname === '/home/brand/track' ? 'red' : 'black'}`}
            />
            <span
              className={`ml-2 lg:ml-4 text-sm md:text-md lg:text-lg font-semibold text-darkWheat ${
                pathname === '/home/brand/track' && 'text-red'
              }`}
            >
              Track Suite
            </span>
          </Link>
        </div>

        <div className="flex flex-[0_0_30%]">
          <Link
            href={'/home/brand/tshirt'}
            className="flex my-4 basis-[100%] items-center"
          >
            <FaTshirt
              size={18}
              color={`${pathname === '/home/brand/tshirt' ? 'red' : 'black'}`}
            />
            <span
              className={`ml-2 lg:ml-4 text-sm md:text-md lg:text-lg text-darkWheat font-semibold ${
                pathname === '/home/brand/tshirt' && 'text-red'
              }`}
            >
              T-Shirt
            </span>
          </Link>
        </div>

        <div className="flex flex-[0_0_30%]">
          <Link
            href={'/home/brand/formal-pants'}
            className="flex my-4 basis-[100%] items-center"
          >
            <GiArmoredPants
              color={`${
                pathname === '/home/brand/formal-pants' ? 'red' : 'black'
              }`}
            />
            <span
              className={`ml-2 lg:ml-4 text-sm md:text-md lg:text-lg text-darkWheat font-semibold first-letter ${
                pathname === '/home/brand/formal-pants' && 'text-red'
              }`}
            >
              Formal Pants
            </span>
          </Link>
        </div>

        <div className="flex flex-[0_0_30%]">
          <Link
            href={'/home/brand/shirts'}
            className="flex basis-[100%] my-4 items-center"
          >
            <RiShirtFill
              size={18}
              color={`${pathname === '/home/brand/shirts' ? 'red' : 'black'}`}
            />
            <span
              className={`ml-2 lg:ml-4 font-semibold text-sm md:text-md lg:text-lg text-darkWheat ${
                pathname === '/home/brand/shirt' && 'text-red'
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

export default MobileBrandBar
