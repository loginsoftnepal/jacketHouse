import { Button } from '@/components/ui/button'
import { GiftIcon } from 'lucide-react'
import React from 'react'

function OfferBar() {
  return (
    <div className="flex w-[95%] px-6 mx-4 my-2 py-4 rounded-xl bg-primary items-center">
      <h1 className="text-[20px] text-white">
        We are giving huge offer to our new brands, please go and check.
      </h1>
      <div className="flex items-center justify-center mx-8">
        <GiftIcon size={34} color="red" />
        <div className="flex flex-col text-[red]">
          <span>20%</span>
          <span>OFF</span>
        </div>
      </div>
      <Button className="bg-white text-black hover:bg-white text-darkWheat">
        Shop Now
      </Button>
    </div>
  )
}

export default OfferBar
