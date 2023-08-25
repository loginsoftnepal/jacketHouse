import { useStore } from '@/store/useStore';
import React, { useContext, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
// import { LayoutContext, createContextProps } from '../../context/LayoutContext';
// import RightColumn from '../RightColumn';

interface LayoutBodyProps {
     children: React.ReactNode,
}

function LayoutBody(props: LayoutBodyProps) {

  const {  topSheet, setTopSheet, topSheetContent } = useStore();
   console.log(topSheet);
  return (
    <div className='body-container w-full h-full bg-primary p-[20px] relative z-10 flex bg-no-repeat bg-center bg-contain' style={{backgroundImage: 'url(/homeimg.png)'}}>
        <div className='basis-[80%] h-full z-10 relative'>
          <div className='myScrollbar py-[20px] h-[90vh] overflow-y-auto'>{props.children}</div>
        
        <div
         style={{transform: (topSheet )? 'translateX(0%)' : 'translateX(-110%)'}}
         className='myScrollbar z-30 absolute top-0 left-0 w-full bg-[rgba(0,0,0,0.9)] transition-all py-[30px] h-[87vh] overflow-y-auto backdrop-blur-[3px]'>
            {topSheet ? (
              <div className='w-full px-[40px]'>{topSheetContent}</div>
            ) : null}

              <div onClick={() => setTopSheet(false)} className={`absolute text-[30px] cursor-pointer text-red z-40 ${topSheet ? 'block' : 'hidden'} top-[20px] right-[30px] `}>
                 <AiOutlineClose color="white" size={25} />
              </div>
            
        </div>
        </div>
       {/* <RightColumn /> */}
    </div>
  )
}

export default LayoutBody