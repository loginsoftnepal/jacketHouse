import ProductComment from '@/section/ProductComment/ProductComment'
import ProductDesc from '@/section/ProductDesc/ProductDesc'
import ProductShowCase from '@/section/ProductShowCase/ProductShowCase'
import Searchbar from '@/section/Searchbar/Searchbar'
import React from 'react'

function Product() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-[90%] lg:w-[80%] 2xl:w-[70%] mx-auto flex flex-col lg:flex-row my-16 items-center justify-around">
        <ProductShowCase />
        <ProductDesc />
      </div>

      <div className="w-[90%] lg:w-[80%] mx-auto my-8">
        <h1 className="font-semibold text-darkWheat text-xl my-2">
          Please, Leave one review for quality control :
        </h1>
        <Searchbar
          className="rounded-xl py-3 text-xl"
          placeholder="Write your review about this product"
          buttonClasses="lg:w-[200px] rounded-3xl lg:px-4 lg:py-6 hover:bg-black hover:text-white"
          buttonName="Post a comment"
        />
        <ProductComment />
      </div>
    </div>
  )
}

export default Product
