import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Home() {
  let location = useLocation();

  let data = "Komal Godhaniya"
  let name = "Full stack development"

  return (
    <>        
        <h1>HOME</h1>
        <h1>{location.state.name}</h1>
        <Link to={/About/${data}} >About</Link>
        <Link to={/Contact/${name}} >Contact</Link>
    </>
  )
}