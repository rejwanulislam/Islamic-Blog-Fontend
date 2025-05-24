import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { authcontex } from "../authprovider/AuthProvider"


export default function Navbar() {


    const { user, logoutuser } = useContext(authcontex)

        
    const navbarItem = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addblog'>Add Blog</NavLink></li>
        <li><NavLink to='/allblogs'>All blogs</NavLink></li>
        <li><NavLink to='/futuredblog'>Featured Blogs</NavLink></li>
        <li><NavLink to='/wishlist'>Wishlist</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navbarItem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Islamick Blog</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="gap-3 menu menu-horizontal px-1">
                    {navbarItem}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <div className="h-12 w-12 rounded-full">
                        <img className="h-12 w-12 rounded-full" src={user.photoURL}></img>
                    </div>
                }
                {
                    user ? <button onClick={() => logoutuser()} className="btn">LogOut</button> :
                        <NavLink to='/login'><button className="btn">Login</button></NavLink>
                }

            </div>
        </div>
    )
}
