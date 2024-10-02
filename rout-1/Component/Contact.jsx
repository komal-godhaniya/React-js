import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function Contact() {
    const navigate = useNavigate();
    const param = useParams();
    let data = "Komal Godhaniya"


    const handleBtn =() => {
      navigate("/")
    }

  return (
    <div>
        <h1>Contact</h1>
        <h1>{param.id}</h1>
        <button onClick={handleBtn}>Go to home</button>
        <Link to={/About/${data}}>About</Link>
    </div>
  )
}
