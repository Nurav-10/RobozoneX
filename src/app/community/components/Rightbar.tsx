'use client'
import React, { useEffect } from 'react'
import { PiChartLineUp } from 'react-icons/pi'

const Rightbar = () => {
  useEffect(()=>{

  },[])
  return (
    <div className='border-l common h-full p-3 flex w-[16vw] items-center flex-col'>
      <h2 className='w-full flex items-center justify-center gap-2 text-lg'><PiChartLineUp size={18}/>Trending</h2>
    </div>
  )
}

export default Rightbar