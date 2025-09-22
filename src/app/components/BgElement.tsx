import React from 'react'
import {motion} from 'motion/react'
const BgElement = ({props}:{props:string}) => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{scale:[0.5,1,0.5],opacity:[0.10,.20,0.10]}}
    transition={{duration:10,ease:'easeInOut',repeat:Infinity,repeatType:'reverse'}}
    className={`w-[30vw] lg:w-[15vw] md:w-[20vw] aspect-square blur-2xl absolute rounded-full ${props} `}></motion.div>
  )
}

export default BgElement