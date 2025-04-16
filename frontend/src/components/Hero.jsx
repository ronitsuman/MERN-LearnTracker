import React from 'react'
import { FaCode } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { LuBookCheck } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";





const Hero = () => {
  return (
    <div className='flex flex-col  lg:pl-12 lg:pr-12 bg-[#F3F4F6] gap-6 p-2 '>
        <div className='items-left flex flex-col gap-4 p-12'>
        <h1 className='text-2xl lg:text-4xl font-semibold'>Track Your Journey </h1>
        <h1 className='text-3xl lg:text-5xl text-black font-bold'>For Next 100 days of growth </h1>
        <h1 className='text-4xl lg:text-6xl text-blue-400 font-bold'>Welcome to <span className='text-[#00C951]'>Code</span><span className='text-[#fb2c36]'>Streak</span> </h1>

        <p className='font-bold text-xl '>Document your coding progress , learning achievments ,and
            important notes all in one place . see your growth , and celebrate your commitment .
        </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-4 sm:flex-row sm:flex-wrap lg:flex-nowrap">
      <div className="flex w-full flex-1 flex-col items-center justify-center gap-2 rounded-md bg-white p-4 text-center sm:w-40 sm:min-w-[140px] md:w-48 lg:w-36">
        <FaCode className="text-green-400" size={24} />
        <p className="text-lg font-medium">Track Code</p>
      </div>
      <div className="flex w-full flex-1 flex-col items-center justify-center gap-2 rounded-md bg-white p-4 text-center sm:w-40 sm:min-w-[140px] md:w-48 lg:w-36">
        <FaBookOpen className="text-orange-400" size={24} />
        <p className="text-lg font-medium">Log Learning</p>
      </div>
      <div className="flex w-full flex-1 flex-col items-center justify-center gap-2 rounded-md bg-white p-4 text-center sm:w-40 sm:min-w-[140px] md:w-48 lg:w-36">
        <LuBookCheck className="text-green-400" size={24} />
        <p className="text-lg font-medium">Save Notes</p>
      </div>
      <div className="flex w-full flex-1 flex-col items-center justify-center gap-2 rounded-md bg-white p-4 text-center sm:w-40 sm:min-w-[140px] md:w-48 lg:w-36">
        <SlCalender className="text-orange-400" size={24} />
        <p className="text-lg font-medium">Daily Streaks</p>
      </div>
    </div>
        <button className=' p-2 ml-28 md:ml-80 lg:ml-180 lg:h-12  bg-black w-40 text-white border rounded-md '> Get Started </button>
       
        
    </div>
  )
}

export default Hero