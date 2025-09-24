'use client'
import React from "react";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { PiMoonStars, PiSun } from "react-icons/pi";
import { useTheme } from "next-themes";
import Svg from "./Svg";
import { Bebas_Neue,Noto_Sans } from "next/font/google";
import { clerkClient } from "@clerk/nextjs/server";


export const bebasNeue=Bebas_Neue({
  subsets:['latin'],
  weight:['400']
})

export const notoSans=Noto_Sans({
  subsets:['greek'],
  weight:['300','400','500']
})


const Navbar = () => {
  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Posts",
      href: "/posts",
    },
    {
      title: "Explore",
      href: "/explore",
    },
    {
      title: "About",
      href: "/about",
    },
  ];
  const { theme, setTheme } = useTheme();
  const {user,isSignedIn}=useUser()
  return (
    <div className={`md:w-[70vw] sm:w-[75vw] w-[95vw] mx-auto fixed left-[50%] top-3 -translate-x-1/2 ${notoSans.className} font-[500] backdrop-blur-[5px] z-9999`}>
      <header className={`flex justify-between py-2 sm:pr-6 pr-4 sm:pl-4 bg-orange-300/5 rounded-full border border-orange-400/30 z-999 items-center `}>
        <div className="items-center flex">
          <Svg/>
        </div>
        <div className="gap-6 items-center lg:flex hidden">
          {links.map((i, ind) => {
            return (
              <Link key={ind}
                className="hover:text-orange-400 hover:bg-amber-700/20 px-2 py-0.5 rounded-md transition-all duration-200"
                href={i.href}
              >
                {i.title}
              </Link>
            );
          })}
        </div>
        <div className="flex gap-3 h-fit items-center">
          <div className="flex gap-4 items-center">
            <div>{theme === "dark" ? <PiSun className="border rounded-full rotate-45 p-1 w-6 h-6" onClick={()=>setTheme('light')}/> : <PiMoonStars onClick={()=>setTheme('dark')}/>}</div>
            <FiGithub className="hover:text-orange-500 hover:fill-orange-300/20 w-5 h-5"/>
          </div>
          <div className="flex gap-2 h-fit">
            <SignedOut>
              <SignInButton>
                <button className="rounded-sm px-2 py-0.5 hover:text-orange-400">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-orange-400/90 text-white hover:bg-orange-500/80 px-2 py-0.5 rounded-xl">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;


