import React, { useContext, useEffect } from 'react'
import { authcontex } from '../authprovider/AuthProvider'
import axios from 'axios'
import { useState } from 'react'
import Blogcard from '../compoment/Blogcard'
import UseAxiosSecure from '../hook/AxiosSeceut'

export default function Wishlist() {

    const { user } = useContext(authcontex)
    const [wishlist, setwishlist] = useState([])
    const axiossecure = UseAxiosSecure()
    useEffect(() => {
        const handlegetwishlist = async () => {
            const { data } = await axiossecure.get(`https://islamick-blog-server.vercel.app/${user?.email}`, { withCredentials: true })
            setwishlist(data)
        }
        handlegetwishlist()
    }, [user?.email])
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3'>
            {wishlist.map(data => <Blogcard data={data}></Blogcard>)}
        </div>
    )
}
