import React from 'react'
import { GiHummingbird } from "react-icons/gi";
const Navigation = () => {
  return (
    <div className='sticky top-0 w-full  px-10 py-2 flex items-center shadow-md  shadow-gray-300'>
      <GiHummingbird className='text-5xl text-[#CA5CDD]'/>
      <h1 className='text-2xl uppercase font-semibold tracking-widest text-[#CA5CDD] ml-3 font-["Arizonia"]'>CareerWing</h1>
    </div>
  )
}

export default Navigation