import React from 'react'

const Button = ({className,onclick,children}:{className?:string,onclick?:()=>void,children:React.ReactNode}) => {
  return (
    <button className={`${className} px-2 py-1 hover:shadow-[2px_2px_1px_rgba(0,0,0,1)] rounded-md`} onClick={onclick}>
      {children}
    </button>
  )
}

export default Button