import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Navigate, useNavigate } from 'react-router-dom';

const HomepageHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigate()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const login = () => {
    navigation('/login')
  }
  const handlesingup = ()=>{
    navigation("/signup")
  }


  return (
    <div className="w-full h- bg-[#F3F4F6]">
      <nav className="flex flex-row h-[100px] justify-between p-0 items-center px-4 sm:px-6 lg:px-3 lg:top-[-40px] lg:py-1">
        {/* Logo */}
        <div>
          <a href="/">
            <img
              src="logo.png"
              alt="logo"
              className="h-16 w-16 sm:h-20 sm:w-20 lg:h-[140px] lg:w-[140px]"
            />
          </a>
        </div>

        {/* Hamburger Icon for Mobile and Tablet */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } lg:flex flex-col lg:flex-row absolute lg:static top-[64px] sm:top-[80px] lg:top-[-80px] left-0 w-full lg:w-auto bg-white lg:bg-transparent items-center justify-center gap-4 sm:gap-6 lg:gap-8 p-4 lg:p-0 transition-all duration-300 z-50`}
        >
          <a
            href="feature"
            className="w-full lg:w-auto text-center py-2 px-2 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Feature
          </a>
          <a
            href="Work"
            className="w-full lg:w-auto text-center py-2 px-4 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            How it works
          </a>
          <a
            href="Testimonials"
            className="w-full lg:w-auto text-center py-2 px-4 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </a>
          <button
            className="w-full lg:w-auto border border-gray-300 rounded-md py-2 px-4 text-center hover:bg-gray-100 transition-colors"
            onClick={login}
          >
            Log in
          </button>
          <button
            className="w-full lg:w-auto border rounded-md bg-black text-white py-2 px-4 text-center hover:bg-gray-800 transition-colors"
            onClick={handlesingup}
          >
            Sign up
          </button>
        </div>
      </nav>
      <hr className="hidden  lg:block border-t border-gray-200  sm:mx-6 lg:mx-0  lg:w-full" />
    </div>
  );
};

export default HomepageHeader;