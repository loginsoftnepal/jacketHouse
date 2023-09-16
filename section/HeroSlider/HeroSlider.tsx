import Carousel from '../Carousel/Carousel'
import SliderImage from '../../image/Group 133.png'
import Image from 'next/image'

const getHeroBanner = async () => {
  const response = await fetch(`${process.env.SERVER_URL}/api/heroBanner`, {
    method: 'GET',
  })

  if (!response.ok) {
    throw new Error('Failed to fetch data.')
  }

  return response.json()
}

export default async function HeroSlider() {
  const getData = await getHeroBanner()
  return (
    <div className="w-[100%] mx-auto my-2">
      <Carousel loop>
        {getData.heroBanner && getData.heroBanner.length > 0 ? (
          getData.heroBanner.map((banner: any) => {
            return (
              <div className="relative h-48 lg:h-80 2xl:h-96 flex-[0_0_100%]">
                <Image
                  width={100}
                  height={100}
                  className="w-full h-full object-cover object-center"
                  src={`/heroBanner/${banner.fileName}`}
                  alt=""
                />
              </div>
            )
          })
        ) : (
          <div className="relative h-48 lg:h-80 2xl:h-96 flex-[0_0_100%]">
            <Image
              className="w-full h-full object-cover object-center"
              src={SliderImage}
              alt=""
            />
          </div>
        )}
      </Carousel>
    </div>
  )
}
