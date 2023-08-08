import Link from 'next/link'

export default function NavMenu() {
  return (
    <div className="flex basis-[35%] justify-between items-center px-4">
      <div className="h-full flex items-center border-b-4 transition-colors duration-300 border-b-transparent hover:border-b-red">
        <Link href={'/'}>Home</Link>
      </div>

      <div className="h-full flex items-center border-b-4 transition-colors duration-300 border-b-transparent hover:border-b-red">
        <Link href={'/shop'}>Our Shop</Link>
      </div>

       <div className="h-full flex items-center border-b-4 transition-colors duration-300 border-b-transparent hover:border-b-red">
        <Link href={'/brand'}>Our Brands</Link>
      </div>

      <div className="h-full flex items-center border-b-4 transition-colors duration-300 border-b-transparent hover:border-b-red">
        <Link href={'/location'}>Our Locations</Link>
      </div>
    </div>
  )
}
