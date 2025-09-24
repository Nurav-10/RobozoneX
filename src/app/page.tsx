// this is landing page.
'use client'
import { useTheme } from "next-themes";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BgElement from "./components/BgElement";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import User from "@/models/userModel";


interface UserProfile{
  _id:String,
  email:String,
  username:String,
  age?:Number,
  college?:null,
  clerkId:String
}

const page = () => {
  const {user,isSignedIn}=useUser()
  const {theme,setTheme}=useTheme()
  const [userProfile,setUserProfile]=useState<UserProfile|null>(null)

  useEffect(()=>{
    if(!user) return;

    const saveUser=async()=>{
      const response=await fetch('/api/user/create',{
        method:'POST',
        headers:{'Content-Type':'application.json'}
      }).then(res=>res.json())
      if(response.ok){
        setUserProfile(response.user)
        return;
      }
      else
        console.log(response.message,response.user)
    }

    saveUser()
  },[user])

  return (
    <div className={`${theme==='light'?'bg-gradient-to-bl from-orange-100 to-cyan-100 text-zinc-950':'bg-zinc-950'} relative min-h-screen min-w-screen z-0 px-4 overflow-x-hidden`}>
      <Navbar />
      <Hero/>
      <BgElement props={`bg-gradient-to-b ${theme==='dark'?'from-emerald-300 to-emerald-400':'from-emerald-400 to-emerald-500'} top-20 md:left-80 sm:left-40 left-10`}/>
      <BgElement props={`bg-gradient-to-b ${theme==='dark'?'from-purple-300 to-purple-400':'from-purple-400 to-purple-500'} top-30 md:right-80 sm:right-40 right-5`}/>
      </div>
  );
};

export default page;
