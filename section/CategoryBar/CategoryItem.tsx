import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface CategoryItemProps {
  img: StaticImageData
  name: string
}

export default function CategoryItem({ img, name }: CategoryItemProps) {
  return (
    <Link href={'/home/shop'}>
    <div className="flex flex-col justify-center items-center my-2">
      <div className="w-[80px] bg-search rounded-xl">
        <Image
          className="w-full h-full object-cover object-center"
          src={img}
          alt=""
        />
      </div>
      <div className='mt-2'>
        <span className='font-semibold text-black/90'>{name}</span>
      </div>
    </div>
    </Link>
  )
}
