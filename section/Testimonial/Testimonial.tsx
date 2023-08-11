import React from 'react'
import Carousel from '../Carousel/Carousel'
import TestimonialImage from '../../image/man 1.png'
import Image from 'next/image'
import TestimonialItem from './TestimonialItem'

function Testimonial() {
  const testimonial = [
    {
      img: TestimonialImage,
      name: 'Rajini Gurung',
      review:
        'This is the best website to be the regular buyer and get the amazing gift hampers.',
    },
    {
      img: TestimonialImage,
      name: 'Rajini Gurung',
      review:
        'This is the best website to be the regular buyer and get the amazing gift hampers.',
    },
    {
      img: TestimonialImage,
      name: 'Rajini Gurung',
      review:
        'This is the best website to be the regular buyer and get the amazing gift hampers.',
    },
    {
      img: TestimonialImage,
      name: 'Rajini Gurung',
      review:
        'This is the best website to be the regular buyer and get the amazing gift hampers.',
    },
  ]

  return (
    <div className="w-[80%] mx-auto pt-8 my-2 flex flex-col">
      <div className="w-full flex justify-center mb-8">
        <span className="flex justify-center text-xl pb-2  font-semibold border-b-4 border-red">
          WHAT OUR CUSTOMERS SAYS?
        </span>
      </div>

      <Carousel loop>
        {testimonial &&
          testimonial.map((value, index) => {
            return (
              <TestimonialItem
                key={index}
                img={value.img}
                name={value.name}
                review={value.review}
              />
            )
          })}
      </Carousel>
    </div>
  )
}

export default Testimonial
