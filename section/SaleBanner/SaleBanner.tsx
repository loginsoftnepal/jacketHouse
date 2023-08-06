import Image from 'next/image'
import saleImage from '../../image/Group 150.png'

export const SaleBanner = () => {
  return (
    <div className="w-full h-40 lg:h-96 2xl:h-96 my-8">
      <Image
        className="w-full h-full object-cover object-center"
        src={saleImage}
        alt=""
      />
    </div>
  )
}
