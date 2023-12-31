'use client'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { PropsWithChildren, useEffect, useState } from 'react'
import { Dots } from './Dots'
import React from 'react'
import { CarouselControls } from './CarouselControls'
import AutoPlay from 'embla-carousel-autoplay'

type Props = PropsWithChildren & EmblaOptionsType

export default function Carousel({ children, ...options }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [AutoPlay()])
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap()
      setSelectedIndex(index || 0)
    }

    emblaApi?.on('select', selectHandler)

    return () => {
      emblaApi?.off('select', selectHandler)
    }
  }, [emblaApi])

  const length = React.Children.count(children)
  const canScrollPrev = !!emblaApi?.canScrollPrev()
  const canScrollNext = !!emblaApi?.canScrollNext()

  return (
    <>
      <div className="overflow-hidden relative w-full" ref={emblaRef}>
        <div className="flex">{children}</div>
        {/* <CarouselControls
          canScrollPrev={canScrollPrev}
          canScrollNext={canScrollNext}
          onPrev={() => emblaApi?.scrollPrev()}
          onNext={() => emblaApi?.scrollNext()}
        /> */}
      </div>
      {/* <Dots itemsLength={length} selectedIndex={selectedIndex} /> */}
    </>
  )
}
