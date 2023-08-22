import { Button } from '@/components/ui/button';
import React from 'react'

function ProductDesc() {

  const colors = ['#252B48', '#F7E987', '#EA1179', '#8062D6'];

  return (
    <div className='basis-[40%] px-8 py-8 rounded-xl bg-wheat'>
        <h1 className='text-2xl font-bold'>Colorful Jacket</h1>
        <h3 className='font-semibold text-xl mb-2'>Rs. 2,300</h3>
        <div className='flex items-center'>
         <span className='text-sm mr-2'>
            Ratings:
           {/* <ReactStars count={4} size={15} color2={'#ffd700'} /> */}
        </span>
        <span>
            <span className='text-sm'>4.3 | </span>
            <span className='text-sm'>198 views</span>
        </span>
         </div>

         <div className='flex items-center'>
            <span className='font-semibold mr-4'>Colors:</span>
             <div className='flex'>
                {colors && colors.map((color, index) => {
                     return (
                        <div style={{backgroundColor: color}} key={index} className={`w-[14px] h-[14px] mr-3 rounded-full hover:border-2 hover:border-red hover:offset-4`}></div>
                     )
                })}
             </div>

         </div>

         <div className='flex flex-col'>
            <span className='text-sm'>Select a size:</span>
            <span className='flex items-center'>
                <span className='mx-2 px-2 py-1 hover:border-2 hover:border-red border-2 border-transparent rounded-lg'>S</span>
                <span className='mx-2 px-2 py-1 hover:border-2 hover:border-red border-2 border-transparent rounded-lg'>L</span>
                <span className='mx-2 px-2 py-1 hover:border-2 hover:border-red border-2 border-transparent rounded-lg'>XL</span>
                <span className='mx-2 px-2 py-1 hover:border-2 hover:border-red border-2 border-transparent rounded-lg'>XXL</span>
                <span className='mx-2 px-2 py-1 hover:border-2 hover:border-red border-2 border-transparent rounded-lg'>XXXL</span>
            </span>
         </div>

         <div>
            <span className='text-sm italic my-4'>Legacy product pages are the goldmin of all the informaton a shopper could ever ask for.We are talking high resolution images style, guides, pirice and reviews.</span>
         </div>

         <Button className='rounded-3xl mt-2'>Add To Cart</Button>
    </div>
  )
}

export default ProductDesc