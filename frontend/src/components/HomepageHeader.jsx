import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // React Icons se hamburger aur close icons

const HomepageHeader = () => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Menu  toggle 
  };

  return (
    <div>
      <nav className=" pl-2 pr-2 flex flex-row justify-between items-center ">
        {/* Logo */}
        <div>
          <a href="/">
            <img src="logo.png" alt="logo" className="h-[100px] w-[100px]" />
          </a>
        </div>

        {/* Hamburger Icon  Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row absolute  md:static top-16 left-0 w-full md:w-auto bg-white  md:bg-transparent items-center justify-center md:justify-around gap-6 md:gap-12 p-4 md:p-0 md:pr-6 transition-all duration-300`}
        >
          <a href="feature" className="   hover:bg-black p-2 min-w-screen text-center hover:text-white" onClick={() => setIsOpen(false)}>
            Feature
          </a>
          <a href="Work" className=" hover:bg-black hover:text-white p-2 min-w-screen text-center" onClick={() => setIsOpen(false)}>
            How it works
          </a>
          <a href="Testimonials" className=" hover:bg-black hover:text-white p-2 min-w-screen text-center" onClick={() => setIsOpen(false)}>
            Testimonials
          </a>
          <button
            className="border rounded-md p-2  min-w-screen text-center hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Log in
          </button>
          <button
            className="border rounded-md bg-black text-white p-2 min-w-screen text-center hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Sign in
          </button>
        </div>
      </nav>
      <hr className='invisible border-gray-200 lg:visible ' />
    </div>
  );
};

export default HomepageHeader;