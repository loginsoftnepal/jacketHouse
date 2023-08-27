import { JacketItem } from "@/section/JacketItem/JacketItem";
import JacketImage from '../../../../../image/Rectangle 13.png';
import secondJacketImage from '../../../../../image/secondJacketImage.png';
import thirdJacketImage from '../../../../../image/thirdJacketImage.png';
import fourthJacketImage from '../../../../../image/fourthJacketImage.png';
import fifthJacketImage from '../../../../../image/fifthJacketImage.png';
import sixthJacketImage from '../../../../../image/sixthJacketImage.png';
import seventhJacketImage from '../../../../../image/seventhJacketImage.png';
import eighthJacketImage from  '../../../../../image/eighthJacketImage.png';
import ninthJacketImage from '../../../../../image/ninthJacketImage.png';
import jacketGif from '../../../../../image/gifJacket.gif';

export default function Shop({ params }: {params: { category: string }}) {
   
  const pathname = params.category;

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
        id: 4,
        img: fourthJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },
      {
        id: 5,
        img: fifthJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },    {
        id: 6,
        img: sixthJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },    {
        id: 7,
        img: seventhJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },   
       {
        id: 8,
        img: eighthJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },  
       {
        id: 9,
        img: ninthJacketImage,
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

     const product1 = [
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
        id: 4,
        img: fourthJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },
      {
        id: 5,
        img: fifthJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },    {
        id: 6,
        img: sixthJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },    {
        id: 7,
        img: seventhJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },   
       {
        id: 8,
        img: eighthJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },  
       {
        id: 9,
        img: ninthJacketImage,
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

   const product2 = [
      {
        id: 1,
        img: ninthJacketImage,
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
        img: seventhJacketImage,
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
        img: jacketGif,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },    {
        id: 6,
        img: sixthJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },    {
        id: 7,
        img: seventhJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },   
       {
        id: 8,
        img: eighthJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },  
       {
        id: 9,
        img: secondJacketImage,
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

     const product3 = [
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
        img: thirdJacketImage,
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
        id: 4,
        img: secondJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },
      {
        id: 5,
        img: fifthJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },    {
        id: 6,
        img: sixthJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },    {
        id: 7,
        img: seventhJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },   
       {
        id: 8,
        img: eighthJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },  
       {
        id: 9,
        img: ninthJacketImage,
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

 const product4 = [
      {
        id: 1,
        img: eighthJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },
      {
        id: 2,
        img: seventhJacketImage,
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
        id: 4,
        img: fourthJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },
      {
        id: 5,
        img: fifthJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },    {
        id: 6,
        img: sixthJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },    {
        id: 7,
        img: jacketGif,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },   
       {
        id: 8,
        img: secondJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },  
       {
        id: 9,
        img: thirdJacketImage,
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

 const product5 = [
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
        id: 4,
        img: fourthJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },
      {
        id: 5,
        img: fifthJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },    {
        id: 6,
        img: sixthJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },    {
        id: 7,
        img: seventhJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },   
       {
        id: 8,
        img: eighthJacketImage,
        category: 'Dress',
        name: 'Yellomel',
        price: 2300,
        colors: ['#252B48', '#F7E987', '#EA1179', '#8062D6'],
      },  
       {
        id: 9,
        img: ninthJacketImage,
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

    let targetProduct = product;
    if(pathname == 'jacket'){
      targetProduct = product;
    }else if(pathname == 'track'){
      targetProduct = product2;
    }else if(pathname == 'tshirt'){
      targetProduct = product3;
    }else if(pathname == 'formal-pants'){
      targetProduct = product4;
    }else if(pathname == 'shirts'){
      targetProduct = product5;
    }

   return (
    <div className="flex flex-col w-full">
      <div className="w-full h-screen lg:mx-4 overflow-y-auto lg:p-4 flex justify-between gap-2 lg:gap-4 2xl:justify-start flex-wrap">
        {
          targetProduct && targetProduct.map((val, index) => {
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