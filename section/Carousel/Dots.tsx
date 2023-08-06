import classNames from 'classnames'

type Props = {
  itemsLength: number
  selectedIndex: number
}

export const Dots = ({ itemsLength, selectedIndex }: Props) => {
  const arr = new Array(itemsLength).fill(0)
  return (
    <div className="flex gap-1 my-2 justify-center">
      {arr.map((_, index) => {
        const selected = index === selectedIndex
        return (
          <div
            key={index}
            className={classNames({
              'h-2 w-2 rounded-full transition-all duration-300 bg-primary':
                true,
              'opacity-50': !selected,
            })}
          ></div>
        )
      })}
    </div>
  )
}
