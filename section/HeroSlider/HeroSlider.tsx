import Image from 'next/image'
import Carousel from '../Carousel/Carousel'
import SliderImage from '../../image/Group 133.png'

export default function HeroSlider() {
  return (
    <div className="w-[100%] mx-auto my-2">
      <Carousel loop>
        <div className="relative w-full h-64 lg:h-80 2xl:h-96 flex-[0_0_100%]">
          <Image
            className="w-full h-full object-cover object-center"
            src={SliderImage}
            alt=""
          />
        </div>
        i
        <div className="relative h-64 flex-[0_0_100%]">
          <Image
            className="w-full h-full object-cover object-center"
            src={SliderImage}
            alt=""
          />
        </div>
        <div className="relative h-64 flex-[0_0_100%]">
          <Image
            className="w-full h-full object-cover object-center"
            src={SliderImage}
            alt=""
          />
        </div>
      </Carousel>
    </div>
  )
}
