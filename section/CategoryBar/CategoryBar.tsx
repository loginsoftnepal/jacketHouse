import Jacket from '../../image/Rectangle 66.png';
import CategoryItem from "./CategoryItem";


export default function CategoryBar() {

    const data= [
        {
            img: Jacket,
            name: "Jacket",
        },
        {
            img: Jacket,
            name: "TrackSuit",
        },
        {
            img: Jacket,
            name: "T-shirt",
        },
        {
            img: Jacket,
            name: "Formal Pants",
        },
        {
            img: Jacket,
            name: "Shirts"
        }
    ]

    return (
        <div className='flex px-12 py-4 shadow-md'>
           <div className='basis-[15%] flex justify-center items-center'>
            <span className='text-[18px] font-semibold'>OUR MAIN CATEGORIES</span>
           </div>

           <div className='basis-[80%] flex justify-around items-center'>
               {data.map((category, key) => {
                 return (
                    <CategoryItem key={key} img={category.img} name={category.name} />
                 )
               })}
           </div>
        </div>
    )
}