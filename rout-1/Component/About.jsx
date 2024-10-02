import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


export default function About() {
    const navigate = useNavigate();
    const param = useParams();
    let name = "Full stack"

    const handleBtn =() => {
      navigate("/", { state : { name: "Student"}})
    }

  return (
    <div>
        <h1>About</h1>
        <h1>{param.id}</h1>
        <button onClick={handleBtn}>Go to home</button>
        <Link to={/Contact/${name}}>Contact</Link>

    </div>
  )
}