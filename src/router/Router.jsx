import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import AddBlog from "../pages/AddBlog";
import Detels from "../pages/Detels";
import Wishlist from "../pages/Wishlist";
import Allblog from "../pages/Allblog";
import Update from "../pages/Update";
import FuturedBlog from "../pages/FuturedBlog";
import PrivectRouct from "../privectRoute/PrivectRouct";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/addblog',
                element:<PrivectRouct> <AddBlog></AddBlog></PrivectRouct>
            },
            {
                path:'/detels/:id',
                element:<Detels></Detels>
            },
            {
                path:'/wishlist',
                element:<PrivectRouct><Wishlist></Wishlist></PrivectRouct>
            },
            {
                path:'/allblogs',
                element:<Allblog></Allblog>
            },
            {
                path:'/update/:Id',
                element:<Update></Update>
            },
            {
                path:'/futuredblog',
                element:<FuturedBlog></FuturedBlog>
            },
        ]
    }
])

export default router