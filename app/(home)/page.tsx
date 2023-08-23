import CategoryBar from '@/section/CategoryBar/CategoryBar'
import Collection from '@/section/Collection/Collection'
import HeroSlider from '@/section/HeroSlider/HeroSlider'
import JacketImage from '../../image/Rectangle 13.png'
import CollectionImage from '../../image/man 1.png'
import { SaleBanner } from '@/section/SaleBanner/SaleBanner'
import { LandingBrands } from '@/section/LandingBrands/LandingBrands'
import Navbar from '@/section/Navbar/Navbar'
import { Footer } from '@/section/Footer/Footer'
import secondJacketImage from '../../image/secondJacketImage.png';
import thirdJacketImage from '../../image/thirdJacketImage.png';
import fourthJacketImage from '../../image/fourthJacketImage.png';
import fifthJacketImage from '../../image/fifthJacketImage.png';
import sixthJacketImage from '../../image/sixthJacketImage.png';
import seventhJacketImage from '../../image/seventhJacketImage.png';
import eighthJacketImage from  '../../image/eighthJacketImage.png';
import ninthJacketImage from '../../image/ninthJacketImage.png';
import jacketGif from '../../image/gifJacket.gif';

export default function Home() {
  const collection1 = {
    title: 'Top Liked Product',
    collectionImage: CollectionImage,
    collectionImageText: 'Mens Product',
    product: [
      {
        id: 1,
        img: jacketGif,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },
      {
        id: 2,
        img: secondJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },
      {
        id: 3,
        img: thirdJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },
      {
        id: 3,
        img: fourthJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },
      {
        id: 3,
        img: fifthJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },
     {
        id: 3,
        img: sixthJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },
    ],
  }

  const collection2 = {
    title: 'All Collection',
    collectionImage: CollectionImage,
    collectionImageText: 'Mens Collection',
    product: [
      {
        id: 1,
        img: seventhJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },
      {
        id: 2,
        img: eighthJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },
      {
        id: 3,
        img: ninthJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },
         {
        id: 3,
        img: JacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },
      {
        id: 3,
        img: jacketGif,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },
        {
        id: 3,
        img: fourthJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },
    ],
  }

  return (
    <div>
      <Navbar /> 
      <CategoryBar />
      <HeroSlider />
      <Collection {...collection1} />
      <Collection {...collection2} />
      <SaleBanner />
      <LandingBrands />
      <Footer />
    </div>
  )
}
