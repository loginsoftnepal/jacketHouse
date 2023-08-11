import React from 'react'
import OfferImage from '../../image/Rectangle 13.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function RightSidebarItem() {
  return (
    <div className="w-[90%] mx-auto rounded-xl my-4 py-2 flex flex-col bg-wheat items-center justify-center">
      <h1 className="font-semibold text-[red]">
        OFFER: <span className="font-normal text-black">Get Combo 3pcs</span>
      </h1>
      <div className="w-full relative">
        <Image className="" src={OfferImage} alt="" />
        <div className="bg-[red] absolute w-[120px] top-[40%] right-0 px-2 py-2 rounded-tl-3xl rounded-bl-3xl border-2 border-white border-r-none">
          <span className="text-white">30% OFF</span>
        </div>
      </div>

      <div className="flex w-[70%] mb-2 mx-auto justify-between">
        <span className="text-[red] line-through rotate-20 inline-block">
          Rs. 6000
        </span>
        <span>Rs. 4999 Only</span>
      </div>
      <Button className="rounded-3xl">Add to Cart</Button>
    </div>
  )
}

export default RightSidebarItem
