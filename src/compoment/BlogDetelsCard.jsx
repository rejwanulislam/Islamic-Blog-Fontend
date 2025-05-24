import React, { useContext, useEffect, useState } from 'react'
import { authcontex } from '../authprovider/AuthProvider'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default function BlogDetelsCard({ blogdata }) {
    const { _id, title, useremail, image, shortdescription, longdescription, category } = blogdata

    const { user } = useContext(authcontex)
    const [comment, setcomment] = useState('')
    const [commentdata, setcommentdata] = useState([])
    console.log(commentdata)
    const handlecomment = async () => {
        //   if(user?.email ==useremail)return alert('do not comment')
        const blogcomment = comment
        const blogId = _id
        const userName = user?.displayName
        const userImg = user?.photoURL
        const commentInfo = { blogcomment, blogId, userName, userImg }
        const { data } = await axios.post('https://islamick-blog-server.vercel.app/comment', commentInfo)
        console.log(commentInfo)
        console.log(data)
    }
    useEffect(() => {
        const getcommentdata = async () => {
            const { data } = await axios.get(`https://islamick-blog-server.vercel.app/comment/${_id}`)
            setcommentdata(data)
        }
        getcommentdata()

    }, [_id,])



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="lg:hero-content">
                    <div>
                        <div>
                            <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                        </div>
                        <div>
                            <h1 className="text-5xl font-bold">{title}</h1>
                            <p className="py-6">{shortdescription}</p>
                            <p className="py-6">{longdescription}</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                        <div>
                            <textarea placeholder="Comment" onChange={(e) => setcomment(e.target.value)}
                                className="textarea textarea-bordered textarea-sm w-full max-w-xs" ></textarea>
                        </div>
                        <button onClick={() => handlecomment()} className='btn'>Add Comment</button>
                        {
                            user?.email == useremail && <NavLink to={`/update/${_id}`}><button className='btn'>UpDate</button></NavLink>
                        }
                    </div>
                    <div>

                        {
                            commentdata.map(comment => (<div class="flex items-start gap-3 p-4 bg-gray-100 rounded-lg max-w-xl shadow">

                                <img src={comment?.userImg} alt="profile" class="w-10 h-10 rounded-full object-cover"></img>
                                <div>
                                    <p class="font-semibold text-sm text-gray-800">{comment?.userName}</p>
                                    <p class="text-gray-700 text-sm mt-1">
                                        {comment?.blogcomment}
                                    </p>
                                </div>
                            </div>))
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}
