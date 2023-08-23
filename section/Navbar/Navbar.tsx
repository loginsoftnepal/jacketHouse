import Image from 'next/image'
import Searchbar from '../Searchbar/Searchbar'
import Logo from '../../image/Logo.png'
import NavMenu from '../NavMenu/NavMenu'
import NavItem from '../NavItem/NavItem'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="flex px-12 2xl:px-16 w-full justify-between shadow-xl">
      <div className="w-[130px]">
        <Link href={'/'}>
        <Image
          className="w-full h-full object-center object-contain"
          priority
          src={Logo}
          alt=""
        />
        </Link>
      </div>
      <Searchbar buttonClasses='hover:bg-[rgba(0,0,0,0.9)] hover:text-white my-[2px] font-semibold' className='my-2' />
      <NavMenu />
      <NavItem />
    </div>
  )
}
