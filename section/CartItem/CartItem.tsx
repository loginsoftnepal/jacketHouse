import { PanelTopClose } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { X } from 'lucide-react'
import { useStore } from '@/store/useStore'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export interface CartItemProps {
  item: {
    id: number
    title: string
    description: string
    price: number
    color?: string
    size?: string
    image?: StaticImageData | string
    category: string
    brand: string
    quantity?: number
  }
}

function CartItem({ item }: CartItemProps) {
  const { removeFromCart } = useStore()

  return (
    <div className="w-full flex relative rounded-lg  mb-2 bg-slate-50 hover:bg-slate-200">
      <div className="absolute top-0 right-0 m-[2px] rounded-full">
        <X
          className="bg-[#FF0000] rounded-full"
          color="white"
          size={15}
          onClick={() => removeFromCart(item.id)}
        />
      </div>
      <div className="basis-[30%] max-h-[100px] m-1 ">
        <Image
          className="w-full h-full object-contain"
          src={item.image ? item.image : ''}
          alt=""
        />
      </div>
      <div className="flex basis-[60%] flex-col px-1 py-2">
        <h1 className="text-xl font-semibold">{item.title}</h1>
        <h5 className="text-sm font-semibold">{`Rs.${item.price}`}</h5>
        <h4 className="text-sm">{`Quantity: ${item.quantity}`}</h4>
        <div className="w-full flex justify-between">
          <h3 className="text-sm">
            <Select>
              <SelectTrigger className="w-[100px] px-0 py-0 my-0">
                <SelectValue placeholder="color" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sm">Small</SelectItem>
                <SelectItem value="md">Medium</SelectItem>
                <SelectItem value="lg">Large</SelectItem>
                <SelectItem value="l">Extra Large</SelectItem>
              </SelectContent>
            </Select>
          </h3>
          <h3 className="text-sm">{`Size: ${item.size}`}</h3>
        </div>
      </div>
    </div>
  )
}

export default CartItem
