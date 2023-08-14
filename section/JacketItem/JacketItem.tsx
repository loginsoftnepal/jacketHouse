"use client"
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Image1 from '../../image/man 1.png';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useStore } from '@/store/useStore';

export interface IJacket {
    id: number,
    img: StaticImageData,
    category: string,
    colors: string[],
    name: string,
    price: number
}

const Product = {
   id: 1,
   title: "Jacket",
   image: Image1,
   description: "This jacket can only be found in jackethouse",
   price: 2000,
   size: 'xl',
   color: 'red',
   quantity: 1,
   category: 'mens',
   brand: 'legacy',
}

export function JacketItem(props: IJacket) {

   const { addToCart } = useStore();
  return (
    <div className='flex flex-col items-center'>
       <div className='w-[250px]'>
        <Image src={props.img} alt="" className='-w-full h-full object-cover object-center' />
       </div>
       <div className='w-full flex flex-col'>
         <div className='flex justify-between items-center'>
            <span>{props.category}</span>
            <div className='flex'>
                {props.colors.map((val, index) => {
                    return (
                        <div key={index} className={`mr-2 w-[15px] h-[15px] rounded-full bg-[red]`}></div>
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
            <Button className='px-0 font-semibold' variant={'link'} onClick={() => addToCart(Product)}>Add to Cart</Button>
            <Link className='font-semibold' href="/product">View</Link>
         </div>
       </div>
    </div>
  )
}