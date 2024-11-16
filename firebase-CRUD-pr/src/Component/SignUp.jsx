import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db } from '../../FirebaseConfig'
import { doc, setDoc } from 'firebase/firestore'

export default function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [number, setNumber] = useState("")
    const [city, setCity] = useState("")

    const navigate = useNavigate("")

    const handleSubmit = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(data => {
                setDoc(doc(db, "users", data.user.uid), {
                    name, email, number, city
                })
                console.log("added")
                // navigate("/dashboard")
                setName("")
                setEmail("")
                setPassword("")
                setNumber("")
                setCity("")
            })
    }


    return (
        <div id="signup">
            <div>
                <h1>Sign Up</h1>
                <h2>Sign Up</h2>
            </div>
            <br /><br />
            <input type="text" placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="text" placeholder='Enter Your Phone No.' value={number} onChange={(e) => setNumber(e.target.value)} />
            <input type="text" placeholder='Enter Your City' value={city} onChange={(e) => setCity(e.target.value)} />
            
            <button onClick={handleSubmit}>Submit</button>
            <Link to={"/signin"}>Sign In</Link>
        </div>
    )
}
