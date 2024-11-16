import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../FirebaseConfig'

export default function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSignin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(user => {
                navigate("/dashboard")
            })
    }

    return (
        <div id='signin'>
            <div>
                <h1>Sign In</h1>
                <h2>Sign In</h2>
            </div>
            <br /><br />
            <input type="text" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignin}>Sign In</button>
            <Link to={"/"}>Sign Up</Link>
        </div>
    )
}
