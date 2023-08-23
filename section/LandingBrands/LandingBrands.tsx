import Image from 'next/image'
import firstBrandImage from '../../image/Mt.Everest.png'
import secondBrandImage from '../../image/Northplace.png'
import thirdBrandImage from '../../image/Adibaba.png';
import fourthBrandImage from '../../image/Legacy.png';
import fifthBrandImage from '../../image/NorgeyFashion.png';
// import sixthBrandImage from '../../image/mike.png';
import Marquee from "react-fast-marquee";


export const LandingBrands = () => {
  const data = {
    title: 'Our Brands',
    img: [
      firstBrandImage,
      secondBrandImage,
      thirdBrandImage,
      fourthBrandImage,
      fifthBrandImage,
      // sixthBrandImage,
    ],
  }

  return (
    <div className="w-full mt-4">
      <div className="w-full my-4 flex justify-center items-center">
        <span className="font-semibold text-[24px] uppercase mr-4">
          {data &&
            data.title
              .split(' ')
              .filter((val, index) => data.title.split(' ').length - 1 != index)
              .join(' ')}
        </span>
        <span className="font-bold text-[24px] text-red uppercase">
          {data && data.title.split(' ')[data.title.split(' ').length - 1]}
        </span>
      </div>

      <div className="w-full flex py-12 px-4 justify-around items-center bg-brand border-b-8 border-wheat">
        <Marquee autoFill>
        {data &&
          data.img.map((val, index) => {
            return (
              <div key={index} className="w-[150px] h-full mx-8">
                <Image
                  src={val}
                  alt=""
                  className="w-full h-full object-contain object-center"
                />
              </div>
            )
          })}
          </Marquee>
      </div>
    </div>
  )
}
