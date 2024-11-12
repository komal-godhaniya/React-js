import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db } from '../../FirebaseConfig'
import { doc, setDoc } from 'firebase/firestore'

export default function SignUp() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [number,setNumber] = useState("")
    const [city , setCity] = useState("")

    const navigate = useNavigate("")

    const handleSubmit = () => {
        createUserWithEmailAndPassword(auth , email , password)
        .then(data=>{
            setDoc(doc(db,"users",data.user.uid),{
                name,email,number,city
            })
            console.log("added")
            // navigate("/dashboard")
        })
    }


  return (
    <div>
        <h1>SignUp</h1>
        <input type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)}/>
        <input type="text" placeholder='Enter Your Phone No.' onChange={(e) => setNumber(e.target.value)}/>
        <input type="text" placeholder='Enter Your City' onChange={(e) => setCity(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
        <Link to={"/signin"}>Sign In</Link>
    </div>
  )
}
