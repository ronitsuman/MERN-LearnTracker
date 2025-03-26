import React, { useState } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginSuccess } from '../redux/authSlice';
import "react-toastify/ReactToastify.css";
import { useDispatch } from 'react-redux';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Email Validation
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // Login Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      toast.error("Invalid email format");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", formData);

      dispatch(
        loginSuccess({
          user: response.data.user,
          token: response.data.accessToken
        })
      );

      toast.success("Login Successful! Redirecting...");
      setTimeout(() => navigate('/dashboard'), 1000);
      
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed!");
    }
  };

  return (
    <div>
      <Header />
      <motion.div
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ x: "100vw", opacity: 1 }}
        transition={{ duration: 4, type: "spring", stiffness: 60, damping: 10 }}
        className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100 p-6"
      >
        <h1 className="text-5xl font-bold text-center mb-2">
          Welcome to <span className="text-green-500">Code</span>
          <span className="text-red-500">Streak</span>
        </h1>
        <p className="text-lg text-red-400 mb-6">Track your next 100 days</p>

        {/* Form Card */}
        <motion.form
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md"
        >
          <h2 className="text-center text-3xl font-bold mb-6">Log In</h2>

          {/* Email */}
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-lg font-medium">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
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
              name="password"
              onChange={handleChange}
              placeholder="Enter Your Password"
              className="w-full p-3 border rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 mt-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Log In
          </button>
          <p className="capitalize text-center mt-2 text-gray-500">
            Don't have an account? <a href="/signup" className="text-blue-600">Sign up!</a>
          </p>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default LoginPage;
