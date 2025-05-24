import axios from 'axios'
import React, { use, useEffect, useState } from 'react'
import Blogcard from '../compoment/Blogcard'

export default function Allblog() {
    
    const [allblog, setallblog] = useState([])
    const [serch, setserch] = useState('')
    const [category, setcategory] = useState('')
    console.log(serch)
    console.log(category)


    useEffect(() => {
        const fetchallblogdata = async () => {
            const { data } = await axios.get(`https://islamick-blog-server.vercel.app/allblog?serch=${serch}&category=${category}`)
            setallblog(data)
        }
        fetchallblogdata()
    }, [serch, category])



    return (
        <div>
            <input type="text" onChange={(e) => setserch(e.target.value)} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
            <select onChange={(e) => setcategory(e.target.value)} className="select">
                <option disabled selected>category</option>
                <option>Worship</option>
                <option>Islamic Lifestyle</option>
                <option>Morality & Ethics</option>
                <option>Quran & Tafsir</option>
                <option>Hadith & Sunnah</option>
                <option>Dua & Dhikr</option>
                <option>Islamic History</option>
                <option>Youth & Islam</option>
                <option>Women in Islam</option>
                <option>Hereafter & Day of Judgment</option>
                <option>Islam & Modern Issues</option>

            </select>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                {
                    allblog.map(data => <Blogcard data={data}></Blogcard>)
                }
            </div>
        </div>
    )
}
