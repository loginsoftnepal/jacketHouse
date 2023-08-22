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
    <div className={`flex basis-[30%] bg-search px-2 py-1 w-full ${props.className}`}>
      <Button className="mx-2" variant={'search'} size={'icon'}>
        <SearchIcon />
      </Button>
      <Input
        placeholder={`${props.placeholder ? props.placeholder : 'Search for anything...'}`}
        className="border-0 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 outline-none shadow-none bg-transparent text-md mr-2"
      />
      <Button className={`${props.buttonClasses}`} variant={'screen'} size={'sm'}>
        {`${props.buttonName ? props.buttonName : 'Search'}`}
      </Button>
    </div>
  )
}
