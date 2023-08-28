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
    <div className="w-full flex px-8 py-8 border-b-[1px] border-darkWheat">
      <div>
        <div className="w-[100px] h-[100px] rounded-xl">
          <Image
            className="w-full h-full object-cover"
            src={props.img}
            alt=""
          />
        </div>
        <h1 className="text-center font-semibold text-darkWheat">
          {props.name}
        </h1>
      </div>

      <div className="h-32 bg-darkWheat opacity-30 w-[2px] mx-16"></div>

      <div>
        <h1 className="text-darkWheat text-lg font-semibold">{props.review}</h1>
        <div>
          <span>Rating:</span>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default ProductCommentItem
