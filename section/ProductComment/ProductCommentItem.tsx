import Image, { StaticImageData } from 'next/image'
import React from 'react'

export interface CommentItemProps {
  img: StaticImageData | string
  name: string
  review: string
  rating: number
}

function ProductCommentItem(props: CommentItemProps) {
  return (
    <div className="w-full flex-col flex lg:flex-row px-2 py-2 lg:px-8 lg:py-8 border-b-[1px] border-darkWheat">
      <div className="flex flex-col gap-2 items-center">
        <div className=" w-[100px] h-[100px] rounded-xl">
          <Image
            className="w-full h-full object-cover"
            src={props.img}
            alt=""
          />
        </div>
        <h1 className="mb-2 text-center font-semibold text-darkWheat">
          {props.name}
        </h1>
      </div>

      <div className="h-32 hidden lg:flex bg-darkWheat opacity-30 w-[2px] mx-16"></div>

      <div>
        <h1 className="text-darkWheat my-2 text-lg font-semibold">
          {props.review}
        </h1>
        <div>
          <span>Rating: ⭐⭐⭐⭐⭐</span>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default ProductCommentItem
