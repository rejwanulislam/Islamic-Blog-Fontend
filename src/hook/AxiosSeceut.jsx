import axios from "axios"
import { useContext, useEffect } from "react"
import { authcontex } from "../authprovider/AuthProvider"

const AxiosSecure = axios.create({
    baseURL:'https://islamick-blog-server.vercel.app',
    withCredentials:true
})


const UseAxiosSecure =()=>{
    const {logoutuser} = useContext(authcontex)
      useEffect(()=>{
         AxiosSecure.interceptors.response.use(res=>{
            return res
         },error=>{
            if(error.response.status == 403){
                logoutuser()
            }
         })  
      },[logoutuser])
      return AxiosSecure
}

export default UseAxiosSecure;