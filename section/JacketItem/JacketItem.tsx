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
    <div className='basis-[45%] lg:basis-[30%] 2xl:basis-[23%] flex flex-col items-center rounded-md bg-slate-50 hover:bg-slate-200'>
       <div className='w-full py-4'>
        <Image src={props.img} alt="" className='-w-full h-full object-cover object-center' />
       </div>
       <div className='w-[80%] mx-auto flex flex-col'>
         <div className='flex justify-between items-center'>
            <span>{props.category}</span>
            <div className='flex'>
                {props.colors.map((val, index) => {
                    return (
                        <div key={index} style={{backgroundColor: val}} className={`mr-[2px] w-[10px] h-[10px] rounded-full`}></div>
                    )
                })}
            </div>
         </div>

         <div>
            <span className='font-semibold'>{props.name}</span>
         </div>
         <div>
            <span className='text-md'>{`Rs.${props.price}`}</span>
         </div>

         <div className='w-full flex justify-between items-center'>
            <Button className='px-0 font-bold' variant={'link'} onClick={() => addToCart(Product)}>Add to Cart</Button>
            <Button className='font-bold' variant={'link'}><Link className='font-bold ' href="/home/product">View</Link></Button>
         </div>
       </div>
    </div>
  )
}