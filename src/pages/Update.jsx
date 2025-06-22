import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Update() {
    const { Id } = useParams()
    const [category, setcategory] = useState('')
    const [longdescription, setlongdescription] = useState('')

    console.log(Id)
    const [blogdata, setblogdata] = useState({})
    const { title, image, useremail, shortdescription, } = blogdata
    console.log(blogdata)


    useEffect(() => {
        const singleIslamickBlogData = async () => {
            const { data } = await axios.get(`https://islamick-blog-server.vercel.app/allblog/${Id}`)
            setblogdata(data)
        }
        singleIslamickBlogData()


    }, [Id])




    //update user

    useEffect(() => {
        setcategory(blogdata?.category)
        setlongdescription(blogdata?.longdescription)
    }, [blogdata])

    const handleformdata = async (e) => {
        e.preventDefault()

        // setlongdescription(blogdata?.longdescription)
        const title = e.target.title.value
        const image = e.target.image.value

        const shortdescription = e.target.shortdescription.value

        console.log({ title, image, shortdescription, longdescription, category })
        const blogData = { title, image, shortdescription, longdescription, category }
        const { data } = await axios.patch(`https://islamick-blog-server.vercel.app/allblog/${Id}`, blogData)
        console.log(data)
    }
    return (
        <div className='flex justify-center'>
            <div className=" w-4/5">
                <form onSubmit={handleformdata} className="card-body">
                    <div className='flex gap-4'>
                        <div className='flex-1'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" name='title' defaultValue={title} placeholder="Title" className=" w-full input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image url</span>
                                </label>
                                <input type="text" name='image' defaultValue={image} placeholder="image url" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">short description</span>
                                </label>
                                <input type="text" name='shortdescription' defaultValue={shortdescription} placeholder="short description" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">category</span>
                                </label>
                                <select value={category} onChange={(e) => setcategory(e.target.value)} className="select select-bordered w-full max-w-xs">
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
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Long description</span>
                                </label>
                                <textarea value={longdescription} onChange={(e) => setlongdescription(e.target.value)} placeholder="Long description"
                                    className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">UpDate Blog</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
