import { JacketItem } from "@/section/JacketItem/JacketItem";
import JacketImage from '../../image/Rectangle 13.png';

export default function Shop() {

  const product = [
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
      {
        id: 4,
        img: JacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },
      {
        id: 5,
        img: JacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },    {
        id: 6,
        img: JacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },    {
        id: 7,
        img: JacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },   
       {
        id: 8,
        img: JacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },  
       {
        id: 9,
        img: JacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },   
       {
        id: 10,
        img: JacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },
    ]

   return (
    <div className="flex flex-col w-full">
      <div className="w-full h-screen mx-4 overflow-y-auto px-4 p-4 flex justify-between flex-wrap">
        {
          product && product.map((val, index) => {
            return (
              <JacketItem
               key={index}
               id={index}
               img={val.img}
               colors={val.colors}
               price={val.price}
               category={val.category}
               name={val.name}
              />
            )
          })
        }
      </div>
    </div>
   )
}