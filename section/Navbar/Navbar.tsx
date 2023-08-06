import Image from 'next/image'
import Searchbar from '../Searchbar/Searchbar'
import Logo from '../../image/Logo.png'
import NavMenu from '../NavMenu/NavMenu'
import NavItem from '../NavItem/NavItem'

export default function Navbar() {
  return (
    <div className="flex px-12 2xl:px-16 py-2 w-full justify-between shadow-md">
      <div className="w-[130px]">
        <Image
          className="w-full h-full object-center object-contain"
          priority
          src={Logo}
          alt=""
        />
      </div>
      <Searchbar />
      <NavMenu />
      <NavItem />
    </div>
  )
}
