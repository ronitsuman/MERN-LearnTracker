import React from 'react'
import { FaCode } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { LuBookCheck } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";





const Hero = () => {
  return (
    <div className='flex flex-col  lg:pl-12 lg:pr-12 bg-[#F3F4F6] gap-12 '>
        <div className='items-left flex flex-col gap-4 p-12'>
        <h1 className='text-2xl lg:text-4xl font-semibold'>Track Your Journey </h1>
        <h1 className='text-3xl lg:text-5xl text-black font-bold'>For Next 100 days of growth </h1>
        <h1 className='text-4xl lg:text-6xl text-blue-400 font-bold'>Welcome to <span className='text-[#00C951]'>Code</span><span className='text-[#fb2c36]'>Streak</span> </h1>

        <p className='font-bold text-xl '>Document your coding progress , learning achievments ,and
            important notes all in one place . see your growth , and celebrate your commitment .
        </p>
        </div>
        <div className='flex items-center text-xl justify-between gap-4  flex-col lg:flex-row pl-2 pr-2 '>
            <p  className='w-full lg:w-[140px] bg-white pt-4 rounded-md gap-2 h-[100px] text-center flex flex-col items-center ' >
               <FaCode className='text-green-400' />

                Track Code
            </p>
            <p className='w-full lg:w-[140px] bg-white pt-4 rounded-md gap-2 h-[100px] text-center flex flex-col items-center '> 
            <FaBookOpen className='text-orange-400' />

                Log Learning
            </p>
            <p  className='w-full lg:w-[140px] bg-white pt-4 rounded-md gap-2 h-[100px] text-center flex flex-col items-center '>
            <LuBookCheck className='text-green-400' />

                Save Notes
            </p>
            <p  className='w-full lg:w-[140px]  bg-white pt-4 rounded-md gap-2 h-[100px] text-center flex flex-col items-center '>
             <SlCalender className='text-orange-400' />

                Daily Streaks
            </p>
        </div>
        <button className='p-2 bg-black w-60 text-white border rounded-md lg:ml-55'> Get Staarted </button>
       
        
    </div>
  )
}

export default Hero