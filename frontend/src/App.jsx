import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ResetPassword from './pages/ResetPassword'
import TrackerPage from './pages/TrackerPage'
import { ForgotPassword } from './pages/ForgotPassword'
import { Dashboard } from './pages/Dashboard'
import { ToastContainer } from 'react-toastify'
import ProtectedRoute from './components/ProtectedRoute'

const router = createBrowserRouter([
  { path: '/', element: <Homepage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignupPage /> },
  { path: '/resetPassword', element: <ResetPassword /> },
  { path: '/forgot-password', element: <ForgotPassword /> },

  //  Protected Routes
  {
    element: <ProtectedRoute />,  // Protected wrapper
    children: [
      { path: '/tracker', element: <TrackerPage /> },
      { path: '/dashboard', element: <Dashboard /> },
    ],
  },
])

const App = () => {
  return (
    <>
      <ToastContainer position='top-right' autoClose={3000} />
      <RouterProvider router={router} />
    </>
  )
}

export default App
