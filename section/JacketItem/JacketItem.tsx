import { Button } from '@/components/ui/button'
import Image, { StaticImageData } from 'next/image'

export interface IJacket {
  id: number
  img: StaticImageData | string
  colors: string[]
  price: number
  category: string
  name: string
}

export const JacketItem: React.FC<IJacket> = (props) => {
  return (
    <div className="w-[30%] flex flex-col">
      <div className="">
        <Image className="w-full h-full object-cover" src={props.img} alt="" />
      </div>
      <div className="flex flex-col w-[90%] mx-auto">
        <div className="flex justify-between items-center">
          <div>{props.category}</div>
          <div className="flex">
            {props.colors.map((value, index) => {
              return (
                <div
                  key={index}
                  className={`mr-2 w-[10px] h-[10px] rounded-full bg-[${value}]`}
                ></div>
              )
            })}
          </div>
        </div>
        <div>
          <span className="text-md">{props.name}</span>
        </div>

        <div className="w-full">
          <span className="font-semibold text-md">{`Rs.${props.price}`}</span>
        </div>
        <div className="w-full flex justify-between items-center">
          <Button className="text-left px-0 font-semibold" variant={'link'}>
            Add to Cart
          </Button>
          <Button className="text-right px-0 font-semibold" variant={'link'}>
            View
          </Button>
        </div>
      </div>
    </div>
  )
}
