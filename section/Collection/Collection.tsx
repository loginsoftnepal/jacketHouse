import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Button } from '@/components/ui/button'
import { IJacket, JacketItem } from '../JacketItem/JacketItem'

export interface ICollection {
  title: string
  collectionImage: StaticImageData
  collectionImageText: string
  product: IJacket[]
}

function Collection(collection: ICollection) {
  return (
    <div className="w-[90%] mx-auto py-4">
      <div className="flex">
        <span className="font-semibold text-black text-[32px] uppercase mr-4 mb-4">
          {collection &&
            collection.title
              .split(' ')
              .filter(
                (value, index) =>
                  collection.title.split(' ').length - 1 !== index,
              )
              .join(' ')}
        </span>
        <span className="font-bold text-[red] text-[32px] uppercase">
          {collection &&
            collection.title.split(' ')[collection.title.split(' ').length - 1]}
        </span>
      </div>

      <div className="w-full flex">
        <div className="basis-[35%] relative bg-collection rounded-xl">
          <Image
            className="w-full h-full object-cover object-center"
            src={collection && collection.collectionImage}
            alt=""
          />
          <div className="absolute top-[40%] left-[35%]">
            <span className="font-bold text-white text-[22px] lg:text-[32px] 2xl:text-[40px] leading-0 uppercase">
              Men Collection
            </span>
            <Button className="bg-white text-black font-semibold rounded-none">
              View More
            </Button>
          </div>
        </div>

        <div className="basis-[80%] px-2 py-2 flex justify-between flex-wrap">
          {collection &&
            collection.product.map((val, index) => {
              return (
                <JacketItem
                  key={index}
                  id={index}
                  image={val.image}
                  colors={val.colors}
                  price={val.price}
                  category={val.category}
                  name={val.name}
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Collection
