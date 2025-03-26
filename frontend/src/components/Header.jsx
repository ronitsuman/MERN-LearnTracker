import React from 'react'
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className=' flex justify-between items-center w-[auto] h-[100px] bg-gray-100'>
        <div>
        <img src="logo.png" alt="logo" className='h-[100%] w-[100px]' />
        </div>
        {token ? (
             <button
             onClick={handleLogout}
             className="bg-red-600 px-4 h-12 rounded-lg mr-10 text-white"
           >
             Logout
           </button>
        ):(
          <a href="/login" className='text-white'>Login</a>
        )}
        
    </div>
  )
}

export default Header