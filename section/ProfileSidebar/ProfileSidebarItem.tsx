'use client'
import React from 'react'

interface SidebarItemType {
  info: {
    name: string
    icon?: React.ReactNode
  }
}
function ProfileSidebarItem({ info: { name, icon } }: SidebarItemType) {
  return (
    <div className="w-full flex items-center px-2 pl-6 py-4 hover:bg-[#F4F4F5] rounded-lg">
      <div className="mr-3">{icon}</div>
      <h2 className="font-semibold hover:text-red text-lg">{name}</h2>
    </div>
  )
}

export default ProfileSidebarItem
