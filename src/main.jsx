import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './router/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './authprovider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import PrivectRouct from './privectRoute/PrivectRouct.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      
      <AuthProvider>
     
        <RouterProvider router={router} />
        
      </AuthProvider>
      
    
  </StrictMode>,
)
