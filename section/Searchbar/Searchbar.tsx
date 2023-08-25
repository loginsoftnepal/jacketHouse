import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'

export interface Props {
  className?: string;
  placeholder?: string;
  buttonClasses?: string;
  buttonName?: string;
}

export default function Searchbar(props: Props) {
  return (
    <div className={`flex basis-[60%] md:basis-[50%] lg:basis-[30%] bg-search px-2 md:py-1 w-full ${props.className}`}>
      <Button className="mx-1 lg:mx-2" variant={'search'} size={'icon'}>
        <SearchIcon className='w-[20px] md:w-[30px] lg:w-[40px]' />
      </Button>
      <Input
        placeholder={`${props.placeholder ? props.placeholder : 'Search for anything...'}`}
        className="border-0 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 outline-none shadow-none bg-transparent text-sm lg:text-md mr-2"
      />
      <Button className={`hidden lg:inline-block${props.buttonClasses}`} variant={'screen'} size={'sm'}>
        {`${props.buttonName ? props.buttonName : 'Search'}`}
      </Button>
    </div>
  )
}
