
import React from 'react'
import LocationItemImage from '../../image/Rectangle 58.png';
import Image from 'next/image';
import { Contact, FacebookIcon, InstagramIcon } from 'lucide-react';

function LocationItem() {

  return (
    
    <div className='w-full flex px-8 py-8 border-b-[1px] border-darkWheat'>
        <div className='w-[10%] h-[100px] rounded-xl'>
            <Image className='w-full h-full object-cover' src={LocationItemImage} alt="" />
        </div>
        
        <div className='h-32 bg-darkWheat opacity-30 w-[2px] mx-16'></div>

        <div className='w-full'>
            <h3 className='font-semibold text-2xl'>Samakushi Branch</h3>
            <h5 className='text-lg'>Samakushi, Ranibari marga, near NCMT College</h5>
            <div className="text-lg mb-4">
                     <span className="mr-2">9801020304,</span>
                     <span className="">01-5544403</span>
            </div>

        <div className="w-full flex justify-between">
                    <span className="flex">
                        <Contact  />
                        <span className="ml-2">info@jackethouse.com</span>
                    </span>

                    <span className="flex">
                        <FacebookIcon />
                        <span className="ml-2">Jacket House</span>
                    </span>

                    <span className="flex">
                        <InstagramIcon />
                        <span className="ml-2 ">1_jacket_house</span>
                    </span>

                    <span className="flex">
                        <FacebookIcon />
                        <span className="ml-2">Jacket House</span>
                    </span>
                   </div>
        </div>
    </div>
  )
}

export default LocationItem