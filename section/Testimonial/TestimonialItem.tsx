import Image, { StaticImageData } from 'next/image'
import React from 'react'

export interface TestimonialItemProps {
  img: StaticImageData | string
  name: string
  review: string
}

function TestimonialItem(props: TestimonialItemProps) {
  return (
    <div className="relative w-[80%] mx-2 py-4 h-40 lg:h-72 flex flex-col items-center flex-[0_0_80%] lg:flex-[0_0_33%] rounded-lg bg-slate-50 hover:bg-slate-200 mb-4">
      <div className="w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] rounded-full border-2 border-red mb-4">
        <Image
          className="w-full h-full object-cover object-top"
          src={props.img}
          alt=""
        />
      </div>
      <h3 className="text-sm lg:text-xl font-semibold lg:my-4 my-2">
        {props.name}
      </h3>
      <q className="italic text-sm lg:text-lg px-2 lg:px-4">{props.review}</q>
    </div>
  )
}

export default TestimonialItem
