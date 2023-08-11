'use client'
import React from 'react'
import JacketImage from '../../image/Rectangle 58.png'
import Image from 'next/image'

function ProductShowCase() {
  return (
    <div className="flex">
      <div className="basis-[20%] flex flex-col">
        <div className="w-[100px] h-[100px]">
          <Image
            className="w-full h-full object-cover object-center"
            src={JacketImage}
            alt=""
          />
        </div>
      </div>
      <div className="basis-[80%] ">
        <Image
          src={JacketImage}
          alt=""
          className="w-full h-full object-contain object-center"
        />
      </div>
    </div>
  )
}

export default ProductShowCase
