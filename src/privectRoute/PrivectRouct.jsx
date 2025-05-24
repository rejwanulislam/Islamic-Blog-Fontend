import React, { useContext, useState } from 'react'
import { authcontex } from '../authprovider/AuthProvider'
import { Navigate } from 'react-router-dom'

export default function PrivectRouct({children}) {
 const{user}=useContext(authcontex)
 if(user) return children
 if(!user){
   return <Navigate to='/login'></Navigate>
 }
}
