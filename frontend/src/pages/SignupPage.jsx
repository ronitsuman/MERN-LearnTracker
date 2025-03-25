import React, { useState } from 'react'
import Header from '../components/Header'

const SignupPage = () => {
    
  return (
    <div>
        <Header/>
    <div className='w-[100vw] h-[100vh] capitalize p-10 flex flex-col items-center justify-center bg-gray-100  '>
        <h1 className='capitalize font-bold text-5xl'>Welcome to <span className='text-green-400'>Code</span><span className='text-red-500'>Streak</span> </h1>
        <p className='text-base text-red-400'>track your next 100 days </p>
        <h2>Signup</h2>
        <form className='border p-10 w-[auto]' >

            <div className='flex items-center justify-center gap-2'>
            <label htmlFor="name" className='text-2xl '>Name : </label>
            <input type="text"  id='name' placeholder='Enter Your Name' className=' text-white placeholder:p-2 placeholder:text-xl placeholder:text-center p-2 rounded-2xl bg-gray-400 ' />
            </div>
            
        </form>

    </div>
    </div>
  )
}

export default SignupPage