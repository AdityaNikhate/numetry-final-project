import React, { useEffect } from 'react'
import Navigation from './Navigation'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
import toast from "react-hot-toast";
import Hero from './Hero';
import Options from './Options';

const Home = () => {
  const user = useSelector((state)=>state.user.authUser);
  const navigateTo = useNavigate()
  useEffect(()=>{
    if(!user){
      navigateTo('/')
    }
  },[])
  return (
    <div className='w-full min-h-screen relative'>
      <div className=" absolute w-full h-screen top-0 left-0 -z-20 bg-white">
        <div class="bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>

      <Navigation/>

      <Outlet/>
    </div>
  )
}

export default Home


{/* <div class="absolute top-0 -z-10 h-full w-full bg-white"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div> */}