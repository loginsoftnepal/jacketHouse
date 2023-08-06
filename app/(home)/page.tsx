import CategoryBar from '@/section/CategoryBar/CategoryBar'
import Collection from '@/section/Collection/Collection'
import HeroSlider from '@/section/HeroSlider/HeroSlider'
import Navbar from '@/section/Navbar/Navbar'
import JacketImage from '../../image/Rectangle 13.png'
import CollectionImage from '../../image/man 1.png'
import { SaleBanner } from '@/section/SaleBanner/SaleBanner'
import { LandingBrands } from '@/section/LandingBrands/LandingBrands'
import { Footer } from '@/section/Footer/Footer'

export default function Home() {
  const collection1 = {
    title: 'Top Liked Product',
    collectionImage: CollectionImage,
    collectionImageText: 'Mens Product',
    product: [
      {
        id: 1,
        img: JacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },
      {
        id: 2,
        img: JacketImage,
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
    ],
  }

  const collection2 = {
    title: 'All Collection',
    collectionImage: CollectionImage,
    collectionImageText: 'Mens Collection',
    product: [
      {
        id: 1,
        img: JacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },
      {
        id: 2,
        img: JacketImage,
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
