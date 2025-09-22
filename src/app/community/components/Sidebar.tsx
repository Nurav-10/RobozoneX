'use client'
import Svg from '@/app/components/Svg'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { notoSans } from '@/app/components/Navbar'
import { usePathname } from 'next/navigation'
import { Bookmark, Edit, Home, NotepadText, SettingsIcon } from 'lucide-react'
import { PiChartLineUp } from 'react-icons/pi'
import { FiUser } from 'react-icons/fi'

const Sidebar = () => {

   const pathname=usePathname()
   console.log(pathname)
   const sideElements=[
      {
         id:1,
         title:'Feed',
         href:'/community/latest-feed',
         icon:<Home size={16}/>
      },
        {
         id:2,
         title:'Trending',
         href:'/community/on-trending',
         icon:<PiChartLineUp size={16}/>
      },
        {
         id:3,
         title:'Create Post',
         href:'/community/create-post',
         icon:<Edit size={16}/>
      },
        {
         id:4,
         title:'Drafts',
         href:'/community/your-drafts',
         icon:<NotepadText size={16}/>

      },
        {
         id:5,
         title:'Saved',
         href:'/community/bookmarks',
         icon:<Bookmark size={16}/>

      },
        {
         id:6,
         title:'Community',
         href:'/community',
         icon:<FiUser size={16}/>

      },
        {
         id:7,
         title:'Settings',
         href:'/community/settings',
         icon:<SettingsIcon size={16}/>

      }
   ]


  return (
    <div className='h-full w-full border-r common flex flex-col gap-3 relative'>
      <div className='logo w-full flex justify-center h-fit py-2 border-b common'>
         <Svg/>
      </div>
      <div className='flex flex-col gap-2 items-center py-2 px-5'>
         {
            sideElements.map((i,ind)=>{
               return (
                  <div key={i.id} className={`text-left w-full hover:bg-blue-400/20 hover:text-blue-500 transition-all duration-100 ${pathname===i.href&&'bg-orange-400/20 text-orange-400'}  px-3 py-1 rounded-md ${notoSans.className} flex items-center gap-2`}>
                     <span>{i.icon}</span>
                     <Link href={i.href}>{i.title}</Link>
                  </div>
               )
            })
         }
      </div>
      <div className='px-8 flex justify-center'>
         <Link className='w-[90%] py-2 rounded-md text-semibold text-center bg-orange-500 left-[50%] -translate-x-1/2 absolute bottom-4 font-semibold hover:bg-orange-600' href={'/logout'}>Logout</Link>
      </div>
    </div>
  )
}

export default Sidebar