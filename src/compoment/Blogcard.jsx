import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { authcontex } from '../authprovider/AuthProvider'
import axios from 'axios'

export default function Blogcard({ data }) {
    const location = useLocation()
    const { ObjId, _id, title, image, shortdescription, longdescription, category } = data
    const { user } = useContext(authcontex)
    const wishlistdata = { ObjId: _id, title, image, shortdescription, longdescription, category, userEmail: user?.email }

    const handlewishlist = () => {
        axios.post('https://islamick-blog-server.vercel.app/wishlist', wishlistdata)
            .then(data => console.log(data.data))
    }

    return (
        <div>
            <div className="card w-96 glass">
                <figure><img src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{shortdescription}</p>
                    <div className="card-actions justify-end">
                        {
                            location.pathname !== '/wishlist' && <> <button onClick={() => handlewishlist()} className="btn btn-accent">Wish List</button>
                                < NavLink to={`/detels/${_id}`}><button className="btn btn-primary">Detels</button></NavLink>
                            </>
                        }
                        {
                            location.pathname == '/wishlist' && (<NavLink to={`/detels/${ObjId}`}><button className="btn btn-primary">Detels</button></NavLink>)

                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
