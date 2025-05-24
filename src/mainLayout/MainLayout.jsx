import React from 'react'
import Navbar from '../compoment/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../compoment/Footer'
import { Toaster } from 'react-hot-toast'

export default function MainLayout() {
  return (
    <div>
          <Toaster position='top-center'></Toaster>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        
    </div>
  )
}
