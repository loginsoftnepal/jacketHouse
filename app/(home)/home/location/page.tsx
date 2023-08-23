import Image from "next/image";
import LocationImage from '../../../../image/Rectangle 58.png';
import { Contact, FacebookIcon, InstagramIcon} from "lucide-react";
import LocationItem from "@/section/LocationItem/LocationItem";
import LocationIcon from '../../../../image/Vector.png';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FaTiktok } from 'react-icons/fa';
 

export default function Location() {
   
    return (
        <div>
            <div style={{
                backgroundImage: "url('../../../../image/Rectangle 57.png')",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }} className="w-full flex justify-center py-16 bg-primary">

                <div className="basis-[25%] h-[50vh]">
                    <Image className="w-full h-full object-cover" src={LocationImage} alt="" />
                </div>

                 <div className="basis-[60%] pl-16">
                   <h1 className="text-4xl font-semibold mb-2 text-white">Head Office</h1>
                   <p className="text-lg text-darkWheat">Satdobato, Chapagaun Dobato, Kathmandu, Nepal</p>
                   <div className="text-lg mb-4">
                     <span className="mr-2 text-white">9801020304,</span>
                     <span className="text-white">01-5544403</span>
                   </div>

                   <p className="text-white text-lg">We are the manufacture, we are the creator, we are the designer and we provide awesome shits.</p>
                   <h3 className="text-white text-lg mt-4 mb-8">We are the Legacy.</h3>
                   
                   <div className="w-full flex justify-between">
                    <span className="flex">
                        <Contact color="white" />
                        <span className="ml-2 text-white">info@jackethouse.com</span>
                    </span>

                    <span className="flex items-center">
                        <FaSquareFacebook size={20} color="white" />
                        <span className="ml-2 text-white">Jacket House</span>
                    </span>

                    <span className="flex">
                        <InstagramIcon color="white" />
                        <span className="ml-2 text-white">1_jacket_house</span>
                    </span>

                    <span className="flex items-start">
                        <FaTiktok size={21} color="white" />
                        <span className="ml-2 text-white">Jacket House</span>
                    </span>
                   </div>
                </div>
            </div>

            
              <div className="mt-4 w-[88%] mx-auto">
                <div className="flex items-center my-8">
                    <div className="text-6xl font-bold mr-4 text-darkWheat">Search for location</div>
                    <Image sizes="80px" src={LocationIcon}  alt="" />
                </div>

                <LocationItem />
                <LocationItem />
                <LocationItem />
            </div>
        </div>
    )
}