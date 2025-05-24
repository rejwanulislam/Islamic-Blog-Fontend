import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Blogcard from '../compoment/Blogcard'
import NewsLattersection from '../compoment/NewsLattersection'

export default function Home() {
  const [allblog, setallblog] = useState([])
      
  useEffect(() => {
    const fetchallblogdata = async () => {
      const { data } = await axios.get('https://islamick-blog-server.vercel.app/allblog')
      setallblog(data)
    }
    fetchallblogdata()
  }, [])

  return (
    <div>
      <div>
        <img src='/Gemini_Generated_Image_kr3q4jkr3q4jkr3q.png'></img>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3'>
      {
        allblog.slice(0,6).map(data=><Blogcard data={data}></Blogcard>)
      }
      </div>
      <NewsLattersection></NewsLattersection>
    </div>
  )
}
