import React from 'react'
import SidebarProfileInfo from './SidbarProfileInfo'
import { AiOutlineUser } from 'react-icons/ai'
import { FcSalesPerformance } from 'react-icons/fc'
import ProfileSidebarItem from './ProfileSidebarItem'
import { LayoutGrid } from 'lucide-react'
import { MdSettings } from 'react-icons/md'

export interface ISidebarItem {
  name: string
  icon: React.ReactNode
  link: string
}
function ProfileSidebar() {
  const sidebarItem: ISidebarItem[] = [
    {
      name: 'Profile',
      icon: <AiOutlineUser size={20} color={'black'} />,
      link: '/home/protected/profile'
    },
    {
      name: 'Order',
      icon: <FcSalesPerformance size={20} color={'black'} />,
      link: '/home/protected/order'
    },
    {
      name: 'Settings',
      icon: <MdSettings size={20} color={'black'} />,
      link: '/home/protected/settings'
    },
  ]

  return (
    <div className="basis-[25%] min-h-screen shadow-md">
      <div>
        <SidebarProfileInfo />
      </div>

      <div className="">
        {sidebarItem &&
          sidebarItem.map((data) => {
            return <ProfileSidebarItem info={data} />
          })}
      </div>
    </div>
  )
}

export default ProfileSidebar
