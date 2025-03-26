import React, { useState } from 'react';
import Header from '../components/Header';
import {motion }from 'motion/react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import "react-toastify/ReactToastify.css"

const SignupPage = () => {
  
  //set form data 
  const [formdata,setFormData]=useState({
    name:"",
    email:"",
    password:"",
    category:"Frontend"
  })
  //set handle change
  const handleChange = (e) =>{
    setFormData({...formdata,[e.target.name]:e.target.value})
  }
  //navigate
  const navigate = useNavigate()

  //validation email
  const isValidEmail = (email)=>{
    return /\S+@\S+\.\S+/.test(email);
  };

  //validate password Strength
  const isValidPassword = (password)=>{
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
  }

  
  //calling api 
  const handleSubmit = async (e) =>{
    e.preventDefault();
    // validate before process
    if (!isValidEmail(formdata.email)) {
      toast.error("Invalid email format");
      return;
    }
    if (!isValidPassword(formdata.password)) {
      toast.error("Password must be at least 6 characters with a number");
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup',formdata);
      toast.success("Signup Succesful! Redirecting ...")
      setTimeout(()=>navigate('/login'),1000)
      
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup Failed !")  //optional chaining ?. prevent crash 
      
    }
  }
  return (
    <div>
      <Header />
      <motion.div
      initial={{opacity:0 ,
        x:"-100vw",
        
      }}
      animate={{opacity:1,x:0  }}
      exit={{x:'100vw',opacity:1}}
      transition={{duration:4, type:"spring",stiffness:60,damping:10}}

      className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100 p-6 ">
        <h1 className="text-5xl font-bold text-center mb-2">
          Welcome to <span className="text-green-500">Code</span>
          <span className="text-red-500">Streak</span>
        </h1>
        <p className="text-lg text-red-400 mb-6">Track your next 100 days</p>

        {/* Form Card */}
        <motion.form
        initial={{y:-50,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.5}}
        onSubmit={handleSubmit}

        
        className="bg-white  rounded-2xl shadow-xl p-8 w-full max-w-md">
          <h2 className="text-center text-3xl font-bold mb-6">Sign Up</h2>

          {/* Name */}
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="text-lg font-medium">Name:</label>
            <input
              type="text"
              id="name"
              onChange={handleChange}
              name='name'

              placeholder="Enter Your Name"
              className="w-full p-3 border rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-lg font-medium">Email:</label>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              name='email'
              placeholder="Enter Your Email"
              className="w-full p-3 border rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="text-lg font-medium">Password:</label>
            <input
              type="password"
              id="password"
              onChange={handleChange}
              name='password'
              placeholder="Enter Your Password"
              className="w-full p-3 border rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col mb-4">
            <label htmlFor="category" className="text-lg font-medium">Category:</label>
            <select
              id="category"
              onChange={handleChange}
              name='category'
              className="w-full p-3 border rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Database">Database</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 mt-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
          <p className='capitalize text-center mt-2 text-gray-500'>Already have an account ? <a href="/login" className='text-blue-600'>Log in!</a></p>
        </motion.form>
        
      </motion.div>
    </div>
  );
};

export default SignupPage;
