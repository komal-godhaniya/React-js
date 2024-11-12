import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../FirebaseConfig'

export default function SignIn() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    const handleSignin = () => {
        signInWithEmailAndPassword(auth,email,password)
        .then(user=>{
            navigate("/dashboard")
        })
    }

  return (
    <div>
        <h1>SignIn</h1>
        <input type="text" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleSignin}>Sign In</button>
        <Link to={"/"}>Sign Up</Link>
    </div>
  )
}
