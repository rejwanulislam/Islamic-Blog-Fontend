import React, { useContext } from 'react'
import { authcontex } from '../authprovider/AuthProvider'
import { NavLink } from 'react-router-dom'

export default function Login() {
    const {loginuser,handlegoogleLogin} = useContext(authcontex)
    const handlesubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
         loginuser(email,password)
        console.log({ email, password })
    }
    return (
        <div className='flex justify-center'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handlesubmit} className="card-body">


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                    </div>

                    <div className=" mt-6 flex gap-2">
                        <button className="btn btn-primary">Sign In</button>
                        <button onClick={()=>handlegoogleLogin()} className="btn bg-red-500" >GooGle</button>
                    </div>
                    <h2 className=''>If you don't have an account, please <NavLink to='/signup' className='font-semibold text-yellow-500'>sign up</NavLink></h2>
                </form>
            </div>

        </div>
    )
}
