import React from 'react'
import RightSidebarItem from './RightSidebarItem'

function RightSidebar() {
  return (
    <div className="hidden lg:flex lg:basis-[27%] mx-auto pl-2 lg:flex-col">
      <RightSidebarItem />
    </div>
  )
}

export default RightSidebar
