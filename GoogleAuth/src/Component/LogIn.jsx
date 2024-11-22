import React from 'react'
import { auth, provider } from '../../firebaseconfig'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function LogIn() {

    const navigate = useNavigate()

    let handleLogin = async () => {
        await signInWithPopup (auth, provider).then((user) => {
            console.log(user)

            navigate("/DashBoard")
        })
    }
    return (
        <div>
            <h1>LogIn</h1>
            <input type="text" placeholder='Enter Your Name' />
            <input type="text" placeholder='Enter Your city' />
            <button onClick={handleLogin}>Log In with Google</button>
        </div>
    )
}
