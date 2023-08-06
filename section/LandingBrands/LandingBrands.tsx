import Image from 'next/image'
import firstBrandImage from '../../image/Mt.Everest.png'

export const LandingBrands = () => {
  const data = {
    title: 'Our Brands',
    img: [
      firstBrandImage,
      firstBrandImage,
      firstBrandImage,
      firstBrandImage,
      firstBrandImage,
      firstBrandImage,
    ],
  }

  return (
    <div className="w-full mt-4">
      <div className="w-full my-4 flex justify-center items-center">
        <span className="font-semibold text-[32px] uppercase mr-4">
          {data &&
            data.title
              .split(' ')
              .filter((val, index) => data.title.split(' ').length - 1 != index)
              .join(' ')}
        </span>
        <span className="font-bold text-[32px] text-red uppercase">
          {data && data.title.split(' ')[data.title.split(' ').length - 1]}
        </span>
      </div>

      <div className="w-full flex py-12 px-4 justify-around items-center bg-brand border-b-8 border-wheat">
        {data &&
          data.img.map((val, index) => {
            return (
              <div key={index} className="w-[10%]">
                <Image
                  src={val}
                  alt=""
                  className="w-full h-full object-contain object-center"
                />
              </div>
            )
          })}
      </div>
    </div>
  )
}
