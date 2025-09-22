// this is landing page.
'use client'
import { useTheme } from "next-themes";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BgElement from "./components/BgElement";


const page = () => {
  const {theme,setTheme}=useTheme()
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
