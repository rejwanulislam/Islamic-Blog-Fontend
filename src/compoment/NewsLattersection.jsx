import React from 'react'
//import toast from 'react-hot-toast'
import toast from 'react-hot-toast';


export default function NewsLattersection() {
    const handleTost =(e)=>{
        e.preventDefault()
        toast.success('Thank You')
       
    }
    return (
        <div>
            <div class="bg-gray-800 text-white p-8 max-w-md mx-auto rounded-lg">
                <h2 className="text-2xl font-semibold mb-2">Subscribe to our newsletter</h2>
                <p className="text-sm text-gray-300 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elitw.
                </p>

                <form  onSubmit={handleTost} className="flex">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-2 rounded-l-md focus:outline-none text-gray-800"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-r-md"
                       
                    >
                        SUBSCRIBE
                    </button>
                </form>
            </div>

        </div>
    )
}
