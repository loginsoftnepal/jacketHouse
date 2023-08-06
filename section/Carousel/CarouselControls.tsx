import classNames from 'classnames'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Props = {
  canScrollPrev: boolean
  canScrollNext: boolean
  onPrev(): void
  onNext(): void
}
export const CarouselControls = (props: Props) => {
  return (
    <div className="absolute w-full top-[50%] left-0 flex justify-between px-4">
      <button
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev()
          }
        }}
        disabled={!props.canScrollPrev}
        className={classNames({
          'px-4 py-4 rounded-full shadow-md': true,
          'bg-[rgba(255, 255, 255, 0.5)]': !props.canScrollPrev,
          'bg-[rgba(255, 255, 255, 1)]': props.canScrollPrev,
        })}
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext()
          }
        }}
        disabled={!props.canScrollNext}
        className={classNames({
          'px-4 py-4 rounded-full shadow-md': true,
          'bg-[rgba(255, 255, 255, 0.5)]': !props.canScrollNext,
          'bg-[rgba(255, 255, 255, 1)]': props.canScrollNext,
        })}
      >
        <ChevronRight />
      </button>
    </div>
  )
}
