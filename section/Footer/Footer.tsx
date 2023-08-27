import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import LogoImage from '../../image/white-logo.png'
import Link from 'next/link'
import { FacebookIcon, InstagramIcon } from 'lucide-react'
import { FaTiktok } from 'react-icons/fa'; 
import { AiFillFacebook } from 'react-icons/ai';  

export const Footer = () => {
  const data = {
    offerHeader: 'Get up to 15% Membership Offer',
    offerSubHeading: 'Be our regular buyer and get amazing gift hampers',
  }

  return (
    <div className="bg-brand pt-12 pb-8 w-full flex flex-col overflow-hidden">
      <div className="w-[80%] mx-auto flex flex-col justify-center items-center mb-16">
        <h1 className="text-white text-[20px] md:text-[20px] lg:text-[24px]">{data.offerHeader}</h1>
        <span className="text-white text-[16px] md:text-[18px] lg:text-[20px]">{data.offerSubHeading}</span>

        <div className="flex justify-around w-[100%] lg:w-[70%] mx-auto my-8">
          <Input
            className="bg-wheat w-full   lg:h-16 mr-2 lg:mr-4 text-sm lg:text-lg"
            placeholder="Your Email?"
          />
          <Button
            size={'lg'}
            className="bg-wheat px-0 py-2 lg:py-8 lg:w-full max-w-[150px] lg:max-w-[200px] font-bold text-sm lg:text-lg text-brand hover:bg-wheat hover:text-[red]"
          >
            Be a Member
          </Button>
        </div>
      </div>

      <div className="w-[80%] mx-auto flex flex-col lg:flex-row justify-between">
        <div className="firstCol basis-[30%] flex flex-col">
          <div className="w-full h-[40px] mb-6">
            <Image
              className="w-full h-full object-contain object-left"
              src={LogoImage}
              alt=""
            />
          </div>
          <div className='flex flex-col mb-4'>
            <span className='text-darkWheat hover:text-white'>Head Office: Satdobato,</span>
            <span className='text-darkWheat hover:text-white'>Lalitpur, Nepal</span>
          </div>

          <div className=' flex flex-col mb-4'>
           <span className='text-darkWheat hover:text-white'>sales@thejackethouse.com</span>
            <span className='text-darkWheat hover:text-white'>+977 974761111</span>
          </div>

          <div className='flex items-center'>
            <Link href={'#'} className='mr-4'>
              <AiFillFacebook size={25} color='white' />
            </Link>
            <Link href={'#'} className='mr-4'>
              <InstagramIcon color='white' />
            </Link>
            <Link href={'#'} className='mr-4'>
              <FaTiktok size={20} color='white' />
            </Link>
          </div>
        </div>

        <div className="secondColumn basis-[15%] flex flex-col mt-4 lg:mt-0">
          <h3 className='mb-4 lg:mb-8 uppercase text-white'>COMPANY</h3>
          <Link className='text-darkWheat hover:text-white mb-2' href={'#'}>About Us</Link>
          <Link className='text-darkWheat hover:text-white mb-2' href={'#'}>Shop</Link>
          <Link className='text-darkWheat hover:text-white mb-2' href={'#'}>Career</Link>
          <Link className='text-darkWheat hover:text-white mb-2' href={'#'}>Contact Us</Link>
        </div>

        <div className='thirdColumn text-white basis-[15%] flex flex-col'>
          <h3 className='mb-4 lg:mb-8 uppercase'>SHOP</h3>
          <Link className='text-darkWheat hover:text-white mb-2' href={'#'}>Women</Link>
          <Link className='text-darkWheat hover:text-white mb-2' href={'#'}>Men</Link>
          <Link className='text-darkWheat hover:text-white mb-2' href={'#'}>Jacket</Link>
          <Link className='text-darkWheat hover:text-white mb-2' href={'#'}>Leggings</Link>
        </div>

        <div className='fouthColumn text-white basis-[15%] flex flex-col'>
          <h3 className='lg:mb-8 mb-4  uppercase'>Our Locations</h3>

          <Link className='text-darkWheat hover:text-white mb-2' href={'#'}>Satdobato</Link>
          <Link className='text-darkWheat hover:text-white mb-2' href={'#'}>Samakhushi</Link>
          <Link className='text-darkWheat hover:text-white mb-2' href={'#'}>Bhaktapur</Link>
          <Link className='text-darkWheat hover:text-white mb-2' href={'#'}>Bouddha</Link>
          <Link className='text-darkWheat hover:text-white mb-2' href={'#'}>Pokhara</Link>
        </div>

        <div className='fifthColumn text-white basis-[15%] flex flex-col lg:mb-0 mb-2'>
          <h3 className='mb-4 lg:mb-8 uppercase'>Help</h3>
          <Link className='text-darkWheat hover:text-white mb-2' href={'#'}>Customer Service</Link>
          <Link className='text-darkWheat hover:text-white mb-2' href={'#'}>Legal Privacy</Link>
          <Link className='text-darkWheat hover:text-white mb-2' href={'#'}>Contract</Link>
          <Link className='text-darkWheat hover:text-white mb-2' href={'#'}>Membership</Link>
        </div>
      </div>

      <div className='flex lg:flex-row flex-col justify-between items-center w-[100%] lg:w-[80%] mx-auto mt-6'>
         <span  className='basis-[35%] text-darkWheat hover:text-white'>@Copyright 2023 | All Right Reserved</span>
         <span className='basis-[60%] text-darkWheat hover:text-white'>Designed By <span className='text-red text-md font-semibold cursor-pointer hover:text-[red]'>LOGIN SOFT</span></span>
      </div>
    </div>
  )
}
