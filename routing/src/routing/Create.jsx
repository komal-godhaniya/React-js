import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Create({data,setData}) {
  
    const navigate = useNavigate()

    const[name,setName] = useState("")
    const[subject,setSubject] = useState("")
    const[city,setCity] = useState("")

    const handleSubmit = () => {
        let obj = {id:data.length+1,name: name, subject: subject ,city:city }
        setData([...data,obj]);
        navigate("/")
    }

  
    return (
    <div>
        <center>
            <h1>Create</h1>
        <input type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)}/> <br />
        <input type="text" placeholder='Enter Your Subject' onChange={(e) => setSubject(e.target.value)}/> <br />
        <input type="text" placeholder='Enter Your city' onChange={(e) => setCity(e.target.value)}/> <br />
        <button onClick={handleSubmit}>Submit</button>
        </center>

    </div>
  )
}
