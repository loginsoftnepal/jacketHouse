import { Button } from '@/components/ui/button'
import React from 'react'
import ReactStars from 'react-stars'

function ProductDesc() {
  const colors = ['#ff3322', '23aadd', '#ee2312']

  return (
    <div className="basis-[40%] px-8 py-8 rounded-xl bg-wheat">
      <h1 className="text-2xl font-bold">Colorful Jacket</h1>
      <h3 className="font-semibold text-xl mb-2">Rs. 2,300</h3>
      <div className="flex items-center">
        <span className="text-sm mr-2">
          Ratings:
          {/* <ReactStars count={4} size={15} color2={'#ffd700'} /> */}
        </span>
        <span>
          <span className="text-sm">4.3 | </span>
          <span className="text-sm">198 views</span>
        </span>
      </div>

      <div className="flex items-center">
        <span className="font-semibold mr-4">Colors:</span>
        <div className="flex">
          {colors &&
            colors.map((color, index) => {
              return (
                <div
                  key={index}
                  className={`w-[14px] h-[14px] mr-3 rounded-full bg-[#ff2200]`}
                ></div>
              )
            })}
        </div>
      </div>

      <div className="flex flex-col">
        <span className="text-sm">Select a size:</span>
        <span className="flex items-center">
          <span className="mx-2 p-2">S</span>
          <span className="mx-2 p-2">L</span>
          <span className="mx-2 p-2">XL</span>
          <span className="mx-2 p-2">XXL</span>
          <span className="mx-2 p-2">XXXL</span>
        </span>
      </div>

      <div>
        <span className="text-sm italic my-4">
          Legacy product pages are the goldmin of all the informaton a shopper
          could ever ask for.We are talking high resolution images style,
          guides, pirice and reviews.
        </span>
      </div>

      <Button className="rounded-3xl mt-2">Add To Cart</Button>
    </div>
  )
}

export default ProductDesc
