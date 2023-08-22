"use client"
import Header from "@/section/AdminHeader/AdminHeader";
import LayoutBody from "@/section/AdminLayoutBody/AdminLayoutBody"
import SliderNav from "@/section/AdminSlider/AdminSlider";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isTablet = useMediaQuery({
      query: '(max-width: 992px)',
    });
  const [collapsed, setCollapsed] = useState(isTablet ? true : false);

  return (
     <div className='w-screen bg-primary h-screen relative overflow-hidden'>
      <Header collapsed={collapsed} setCollapsed={setCollapsed} />
      <SliderNav collapsed={collapsed} setCollapsed={setCollapsed} />
       <div className={`z-10 ml-auto mt-[8vh] ${collapsed ? 'w-[95vw]' : 'w-[80vw]'} h-[92vh] overflow-hidden`}>
          <LayoutBody>
             {children}
          </LayoutBody>
       </div> 
    </div>
  )
}