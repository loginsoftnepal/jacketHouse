import Jacket from '../../image/Rectangle 66.png';
import CategoryItem from './CategoryItem';
import TrackSuitImage from '../../image/tracksuit.png';
import TShirtImage from '../../image/tshirt.png';
import FormalPants from '../../image/formalpants.png';
import shirtImage from '../../image/shirt.png';


export default function CategoryBar() {

  const data = [
    {
      img: Jacket,
      name: 'Jacket',
      link: '/home/shop/jacket'
    },
    {
      img: TrackSuitImage,
      name: 'TrackSuit',
      link: '/home/shop/track'
    },
    {
      img: TShirtImage,
      name: 'T-shirt',
      link: '/home/shop/tshirt'
    },
    {
      img: FormalPants,
      name: 'Formal Pants',
      link: '/home/shop/formal-pants'
    },
    {
      img: shirtImage,
      name: 'Shirts',
      link: '/home/shop/shirts',
    },
  ]


  return (
    <div className="flex px-12 py-4 shadow-lg">
      <div className="basis-[15%] flex justify-center items-center">
        <span className="text-[20px] font-semibold italic">OUR MAIN CATEGORIES</span>
      </div>

      <div className="basis-[80%] flex justify-around items-center">
        {data.map((category, key) => {
          return (
            <CategoryItem key={key} link={category.link} img={category.img} name={category.name} />
          )
        })}
      </div>
    </div>
  )
}
