"use client";
import { Bebas_Neue } from "next/font/google";
import React, { useEffect } from "react";
import { bebasNeue, notoSans } from "./Navbar";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { FiGithub } from "react-icons/fi";
import Circuit1 from "./Circuit1";
const Hero = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "light" ? "text-zinc-900" : "text-white"
      } mt-15 overflow-x-hidden text-center py-20 flex-col flex gap-2 font-light items-center`}
    >
      <span className="text-xs px-3 py-1 rounded-full mb-3 border border-white/80 w-fit flex items-center gap-1 bg-gradient-to-bl from-pink-700/10 to-purple-700/10 ">
        New Features comming soon <FiGithub className="mt-1" />
      </span>
      <h2 className={`${notoSans.className} tracking-tight  text-4xl z-999`}>
        Build. Share.
        <span className="relative">
          <span className="font-medium">Collaborate.</span>
          <svg
            className="absolute top-0 right-0 -z-1"
            width="200"
            height="55"
            viewBox="0 0 369 93"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M1.00391 19.6943L178.977 16.5878L272.713 14.9516L366.448 13.3155L1.51875 49.1898L366.963 42.811L2.05105 79.6852L367.495 73.3063"
              stroke="url(#paint0_linear_1181_2)"
              strokeWidth="25"
              className="zigzag-path"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1181_2"
                x1="1.53184"
                y1="49.9397"
                x2="366.976"
                y2="43.5609"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF8F1E" />
                <stop offset="1" stopColor="#036069" stopOpacity="0.61" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </h2>
      <h2 className={`${notoSans.className} tracking-tight text-4xl`}>
        Showcase Your Creation
      </h2>
      <h2 className={`${notoSans.className} tracking-tight text-4xl`}>
        From Breadboard to Breakthrough
      </h2>
      <span className="text-xl font-normal mt-4 bg-gradient-to-bl from-cyan-600  bg-clip-text text-transparent to-orange-500 xl:w-[50vw] sm:[70vw] w-[80vw]">
        “We the People of Technology. Build. Share. Collaborate. Turning
        Ideas Into Innovation. Where Students Become Makers”
      </span>
      <div className="flex gap-3 mt-4 font-semibold">
         <button className="border px-2  hover:bg-orange-400 rounded-t-md transition-all duration-300">Join Now</button><button className="bg-orange-500/90 px-2 hover:bg-cyan-600 transition-all duration-200 rounded-t-md">Explore</button>
      </div>
         <Circuit1/>
    </div>
  );
};

export default Hero;
