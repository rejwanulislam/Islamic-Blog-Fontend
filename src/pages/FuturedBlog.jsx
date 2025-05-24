import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function FuturedBlog() {
    const [futureblog, setfutureblog] = useState([])
    console.log(futureblog)
    useEffect(() => {
        const allfuturedblogData = async () => {
            const { data } = await axios.get('https://islamick-blog-server.vercel.app/wordcount')
            setfutureblog(data)
        }
        allfuturedblogData()
    }, [])
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>category</th>
                        <th>Title</th>
                        <th>Long Description </th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    {
                        futureblog.map((blog,index) => (<tr>
                            <th>{index+1}</th>
                            <td>{blog?.category}</td>
                            <td>{blog?.title}</td>
                            <td>{blog?.longdescription}</td>
                            
                            
                        </tr>))
                    }

                </tbody>
            </table>
        </div>
    )
}
