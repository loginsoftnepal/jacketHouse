'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavMenu() {

  const pathname = usePathname()

  return (
    <div className="lg:flex lg:h-[10vh] 2xl:h-[7vh] basis-[35%] 2xl:basis-[30%] justify-between items-center px-4 hidden">
      <div className={`h-full flex items-center relative`}>
        <Link
          href={'/'}
          className={`${
            pathname === '/' ? 'text-primary' : 'text-darkWheat'
          } font-semibold`}
        >
          Home
        </Link>
        <div
          className={`${
            pathname === '/'
              ? 'w-full absolute h-[6px] rounded-tl-xl rounded-tr-xl bottom-0 bg-red visible'
              : 'invisible'
          }`}
        ></div>
      </div>

      <div className={`h-full flex items-center relative`}>
        <Link
          href={'/home/shop/jacket'}
          className={`${
            pathname.split('/').includes('shop')
              ? 'text-primary'
              : 'text-darkWheat'
          } font-semibold`}
        >
          Our Shop
        </Link>
        <div
          className={`${
            pathname.split('/').includes('shop')
              ? 'w-full absolute h-[6px] rounded-tl-xl rounded-tr-xl bottom-0 bg-red visible'
              : 'invisible'
          }`}
        ></div>
      </div>

      <div className={`h-full flex items-center relative`}>
        <Link
          href={'/home/brand/jacket'}
          className={`${
            pathname.split('/').includes('brand')
              ? 'text-primary'
              : 'text-darkWheat'
          } font-semibold`}
        >
          Our Brands
        </Link>
        <div
          className={`${
            pathname.split('/').includes('brand')
              ? 'w-full absolute h-[6px] rounded-tl-xl rounded-tr-xl bottom-0 bg-red visible'
              : 'invisible'
          }`}
        ></div>
      </div>

      <div className={`h-full flex items-center relative`}>
        <Link
          href={'/home/location'}
          className={`${
            pathname === '/home/location' ? 'text-primary' : 'text-darkWheat'
          } font-semibold`}
        >
          Our Locations
        </Link>
        <div
          className={`${
            pathname === '/home/location'
              ? 'w-full absolute h-[6px] rounded-tl-xl rounded-tr-xl bottom-0 bg-red visible'
              : 'invisible'
          }`}
        ></div>
      </div>
    </div>
  )
}
