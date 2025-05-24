import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import BlogDetelsCard from "../compoment/BlogDetelsCard"


export default function Detels() {
    const { id } = useParams()
    const [blogdata, setblogdata] = useState({})
    useEffect(() => {
        const singleIslamickBlogData = async () => {
            const { data } = await axios.get(`https://islamick-blog-server.vercel.app/allblog/${id}`)
            setblogdata(data)
        }
        singleIslamickBlogData()
    }, [id])
    return (
        <div>
            <BlogDetelsCard blogdata={blogdata}></BlogDetelsCard>
        </div>
    )
}
