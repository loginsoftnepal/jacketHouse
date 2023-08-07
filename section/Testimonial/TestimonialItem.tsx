import Image, { StaticImageData } from 'next/image'
import React from 'react'

export interface TestimonialItemProps {
    img: StaticImageData | string,
    name: string,
    review: string,
}

function TestimonialItem(props: TestimonialItemProps) {

  return (
       <div className='relative w-[80%] mx-auto h-40 lg:h-64 flex flex-col items-center flex-[0_0_33%]'>
            <div className='w-[80px] h-[80px] rounded-full border-2 border-red mb-4'>
                <Image className="w-full h-full object-cover object-top" src={props.img} alt="" />
            </div>
            <h3 className='text-xl font-semibold my-4'>{props.name}</h3>
            <q className='italic text-lg px-4'>{props.review}</q>
         </div>
  )
}

export default TestimonialItem