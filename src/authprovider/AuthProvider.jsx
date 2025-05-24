
import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import axios from 'axios';
export const authcontex = createContext()

export default function AuthProvider({ children }) {
    const [user, setuser] = useState([])
      console.log(user)
    //email password login
    const creactUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
    }

    //email password login

    const loginuser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user)

            })
    }

    //google login
    const provider = new GoogleAuthProvider();
    const handlegoogleLogin = () => {
        signInWithPopup(auth, provider)
    }

    //update name photo url
    const updateprofile = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    //logout
    const logoutuser = () => {
        signOut(auth)
    }

    //mange state
    useEffect(() => {
        onAuthStateChanged(auth, async (currentuser) => {
            if (currentuser?.email) {
                setuser(currentuser)
                

                //genarate token
                const { data } = await axios.post(`https://islamick-blog-server.vercel.app/jwt`, { email: currentuser?.email },
                    { withCredentials: true })
                console.log(data)

            } else {
                console.log('User is signed out')
                const { data } = await axios.get('https://islamick-blog-server.vercel.app/logout', { withCredentials: true })
                console.log(data)
                setuser(currentuser)

            }
        });
    }, [])

    const authIffo = {
        creactUser,
        updateprofile,
        user,
        setuser,
        logoutuser,
        loginuser,
        handlegoogleLogin
    }
    return (
        <authcontex.Provider value={authIffo}>
            {children}
        </authcontex.Provider>
    )
}
