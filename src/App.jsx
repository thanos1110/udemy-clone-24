import React from 'react'
import Footer from './components/Footer'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import './App.css'
import Courselist from './pages/Courselist'
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Courselist />
    },{
      path:'/login',
      element:<Login />
    },{
      path:'/signup',
      element:<Signup />
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App
