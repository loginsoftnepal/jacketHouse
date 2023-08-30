import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Layout, { Menu } from 'antd'
import Link from 'next/link'
import type { MenuProps } from 'antd'
import {
  MailOutlined,
  AppstoreOutlined,
  PieChartOutlined,
  AntDesignOutlined,
  ScheduleOutlined,
  ReadOutlined,
  FileSearchOutlined,
  AimOutlined,
  InsertRowBelowOutlined,
  MinusOutlined,
  AppstoreAddOutlined,
} from '@ant-design/icons'
import { BsAppIndicator } from 'react-icons/bs'
import Sider from 'antd/es/layout/Sider'

type MenuItem = Required<MenuProps>['items'][number]
interface SliderProps {
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

function SliderNav(props: SliderProps) {
  const isTablet = useMediaQuery({
    query: '(max-width: 992px)',
  })
  const [selectedMenu, setSelectedMenu] = useState('dashboard')

  //   useEffect(() => {

  //     if(pathname.split('/')[2] == "") {
  //         setSelectedMenu("dashboard");
  //     }else {
  //         setSelectedMenu(pathname.split('/')[2]);
  //     }
  //   }, [pathname])

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem
  }

  const items: MenuProps['items'] = [
    getItem(
      <Link href="/admin/home">Dashboard</Link>,
      'dashboard',
      <PieChartOutlined />,
    ),

    getItem('Hero Page', 'hero', <AppstoreAddOutlined />, [
      getItem(
        <Link href={`/admin/home/heroBanner`}>Hero Banner</Link>,
        'heroBanner',
        <InsertRowBelowOutlined />,
      ),
      getItem(
        <Link href={'/admin/home/homeSection'}>Add Section</Link>,
        'homeSection',
        <InsertRowBelowOutlined />,
      ),
      getItem(
        <Link href={'/admin/home/salesBanner'}>Sales Banner</Link>,
        'salesBanner',
        <InsertRowBelowOutlined />,
      ),
    ]),
    getItem(
      <Link href="/admin/home/brand">Our Brands</Link>,
      'ourBrand',
      <BsAppIndicator />,
    ),
    getItem(
      <Link href="/admin/home/product">Our Products</Link>,
      'ourProduct',
      <BsAppIndicator />,
    ),
    getItem(
      <Link href={'/admin/home/membership'}>Membership</Link>,
      'membership',
      <BsAppIndicator />,
    ),
    getItem(
      <Link href={'/admin/home/sales'}>Sales</Link>,
      'sales',
      <BsAppIndicator />,
    ),
  ]

  return (
    <div
      className={`z-40 ${
        props.collapsed ? 'w-[5vw]' : 'w-[20vw]'
      } pt-8 fixed h-[92vh] left-0 bottom-0  bg-primarylight`}
    >
      <Sider
        className={`w-[70px] ${
          props.collapsed ? '!w-[5vw]' : 'lg:!w-[5vw] !max-w-[20vw]'
        }`}
        trigger={null}
        collapsible
        collapsed={props.collapsed}
        collapsedWidth={isTablet ? 0 : 60}
      >
        {/* <div>
          <img src={logo} alt="" />
       </div> */}
        <Menu
          theme="dark"
          mode="inline"
          className={`myScrollbar h-[90vh] ${
            props.collapsed ? 'w-[5vw]' : 'w-[20vw]'
          } overflow-y-auto bg-primarylight`}
          onClick={(e) => {
            setSelectedMenu(e.key)
            if (isTablet) {
              props.setCollapsed(true)
            }
          }}
          defaultSelectedKeys={[selectedMenu]}
          selectedKeys={[selectedMenu]}
          items={items}
        />
      </Sider>
    </div>
  )
}

export default SliderNav
