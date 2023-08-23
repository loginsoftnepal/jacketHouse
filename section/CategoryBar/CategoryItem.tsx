import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface CategoryItemProps {
  img: StaticImageData;
  name: string;
  link: string;
}

export default function CategoryItem({link, img, name }: CategoryItemProps) {
  return (
    <Link href={link}>
    <div className="flex flex-col justify-center items-center my-2">
      <div className="w-[80px] bg-slate-100 hover:bg-slate-200 rounded-xl">
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
