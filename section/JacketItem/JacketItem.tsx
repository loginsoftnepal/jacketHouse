import Image, { StaticImageData } from 'next/Image'
import React from 'react'
import Image1 from '../../image/man 1.png';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export interface IJacket {
    id: number,
    img: StaticImageData,
    category: string,
    colors: string[],
    name: string,
    price: number
}
 export function JacketItem(props: IJacket) {

  return (
    <div className='flex flex-col items-center'>
       <div className='w-[300px]'>
        <Image src={props.img} alt="" className='-w-full h-full object-cover object-center' />
       </div>
       <div className='w-full flex flex-col'>
         <div className='flex justify-between items-center'>
            <span>{props.category}</span>
            <div className='flex'>
                {props.colors.map((val, index) => {
                    return (
                        <div key={index} className={`mr-2 w-[10px] h-[10px] rounded-full bg-[${val}]`}></div>
                    )
                })}
            </div>
         </div>

         <div>
            <span>{props.name}</span>
         </div>
         <div>
            <span>{props.price}</span>
         </div>

         <div className='w-full flex justify-between items-center'>
            <Button variant={'link'}>Add to Cart</Button>
            <Link href="/product">View</Link>
         </div>
       </div>
    </div>
  )
}