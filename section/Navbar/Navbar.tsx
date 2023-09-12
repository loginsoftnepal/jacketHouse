import Image from 'next/image'
import Searchbar from '../Searchbar/Searchbar'
import Logo from '../../image/Logo.png'
import NavMenu from '../NavMenu/NavMenu'
import Link from 'next/link'
import MobileMenuContainer from '../MobileMenu/MobileMenuContainer'
import NavItemContainer from '../NavItemContainer/NavItemContainer'

export default function Navbar() {
  return (
    <div className="flex px-4 md:px-12 2xl:px-16 w-full justify-between items-center shadow-xl overflow-hidden">
      <div className="w-[60px] md:w-[90px] lg:w-[130px]">
        <Link href={'/'}>
          <Image
            className="w-full h-full object-center object-contain"
            priority
            src={Logo}
            alt=""
          />
        </Link>
      </div>
      <Searchbar
        buttonClasses="hover:bg-[rgba(0,0,0,0.9)] hover:text-white my-[1px] lg:my-[2px] font-semibold text-sm "
        className="my-2 hidden lg:flex"
      />
      <NavMenu />
      <NavItemContainer hidden={true} />
      <MobileMenuContainer />
    </div>
  )
}
