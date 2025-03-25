import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ResetPassword from './pages/ResetPassword'
import TrackerPage from './pages/TrackerPage'
import { ForgotPassword } from './pages/ForgotPassword'
import { Dashboard } from './pages/Dashboard'

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path:'/',
        element:<><Homepage/></>

    },
      {
        path:'/login',
        element:<><LoginPage/></>

    },
      {
        path:'/signup',
        element:<><SignupPage/></>

    },
      {
        path:'/resetPassword',
        element:<><ResetPassword/></>

    },
      {
        path:'/forgot-password',
        element:<><ForgotPassword/></>

    },
      {
        path:'/tracker',
        element:<><TrackerPage/></>

    },
      {
        path:'/dashboard',
        element:<><Dashboard/></>

    },

  ]
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App