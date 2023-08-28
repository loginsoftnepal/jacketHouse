import { Dropdown, Menu, message } from 'antd'
import React, { useState } from 'react'
import logo from '../../image/white-logo.png'
// import { AiOutlinePoweroff } from 'react-icons/ai';
// import {IoMdNotifications} from 'react-icons/io';
// import { AiOutlineMenuFold, AiOutlineMenuUnfold} from 'react-icons/ai';
// import { axiosInstance } from '../../http';
// import { AuthContext } from '../../context/AuthContext';
import {
  BellRing,
  ChevronLeftSquare,
  ChevronRightSquare,
  Power,
} from 'lucide-react'
import Image from 'next/image'

interface HeaderProps {
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

function Header(props: HeaderProps) {
  const [notificationCount] = useState(0)
  const [contactMessage] = useState([])
  const [jobs] = useState([])

  const handlelogOut = () => {
    //     axiosInstance.post('/authentication/log-out')
    //     .then(() => {
    //        authContextData?.setAdminAuthUser(null);
    //        message.success('Logged out successfully!');
    //     })
    //     .catch(() => {
    //       message.error('Failed to logOut');
    //     })
  }
  const notificationMenu = (
    <Menu
      style={{
        width: '200px',
      }}
      onClick={(e) => {
        // navigate(e.key)
      }}
    >
      <Menu.Item key="contact-data">
        <div className="flex gap-1 items-center">
          <BellRing size={15} />{' '}
          <span>{`You have ${
            contactMessage && contactMessage.length
          } contacts.`}</span>
        </div>
      </Menu.Item>
      <Menu.Item key="jobs-data">
        <div className="flex gap-1 items-center">
          <BellRing size={15} />{' '}
          <span>{`You have ${jobs && jobs.length} jobs.`}</span>
        </div>
      </Menu.Item>
    </Menu>
  )
  return (
    <div
      className={`z-50 w-screen px-4 fixed top-0 left-0 h-[12vh] bg-primarylight flex ${
        props.collapsed ? 'justify-between' : 'justify-between'
      } items-center`}
    >
      <div className="basis-[20%] flex justify-between items-center">
        {!props.collapsed && (
          <div className="">
            <Image className="w-[70px] h-full" src={logo} alt="" />
          </div>
        )}
        <div onClick={() => props.setCollapsed((prev) => !prev)}>
          {props.collapsed ? (
            <ChevronRightSquare color="white" size={25} />
          ) : (
            <ChevronLeftSquare color="white" size={25} />
          )}
        </div>
      </div>
      <div className="header-right basis-1/4 justify-end flex">
        <div className="px-4">
          <Dropdown
            //    style={{ width: '100px' }}
            trigger={['click']}
            placement="bottomRight"
            overlay={notificationMenu}
          >
            <div
              className={`relative text-[18px] ${
                notificationCount > 0 ? 'text-red' : 'text-grey'
              }`}
            >
              <div
                className={`absolute bottom-[-10px] right-[-20pc] heigh-[25px] width-[25px] rounded-[50%] background-red text-white text-[14px] ${
                  notificationCount > 0 ? 'flex' : 'hidden'
                } items-center justify-center`}
              ></div>
              <BellRing color={'white'} size={25} />
            </div>
          </Dropdown>
        </div>

        <div className="cursor-pointer">
          <Power color="white" size={25} onClick={handlelogOut} />
        </div>
      </div>
    </div>
  )
}

export default Header
