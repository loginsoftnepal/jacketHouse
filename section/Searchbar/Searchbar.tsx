import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'

export default function Searchbar() {
  return (
    <div className="flex basis-[30%] bg-search ml-8 px-2 py-1 w-full ">
      <Button className="mx-2" variant={'search'} size={'icon'}>
        <SearchIcon />
      </Button>
      <Input
        placeholder="Search for anything..."
        className="border-0 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 outline-none shadow-none bg-transparent mr-2"
      />
      <Button variant={'screen'} size={'sm'}>
        Search
      </Button>
    </div>
  )
}
