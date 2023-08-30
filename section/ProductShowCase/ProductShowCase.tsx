'use client'
import React from 'react'
import JacketImage from '../../image/Rectangle 13.png'
import Image from 'next/image'

function ProductShowCase() {
  return (
    <div className="flex w-full lg:basis-[50%] lg:justify-around">
      <div className="basis-[30%] flex flex-col items-end">
        <div className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] m-2 border-2 border-red rounded-lg">
          <Image
            className="w-full h-full object-cover object-center"
            src={JacketImage}
            alt=""
          />
        </div>
        <div className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] m-2 hover:border-2 hover:border-red rounded-lg">
          <Image
            className="w-full h-full object-cover object-center"
            src={JacketImage}
            alt=""
          />
        </div>
        <div className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] m-2 hover:border-2 hover:border-red rounded-lg">
          <Image
            className="w-full h-full object-cover object-center"
            src={JacketImage}
            alt=""
          />
        </div>
        <div className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] m-2 hover:border-2 hover:border-red rounded-lg">
          <Image
            className="w-full h-full object-cover object-center"
            src={JacketImage}
            alt=""
          />
        </div>
      </div>
      <div className="basis-[60%]">
        <Image
          src={JacketImage}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  )
}

export default ProductShowCase
