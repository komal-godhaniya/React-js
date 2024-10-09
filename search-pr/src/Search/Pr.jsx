import React from 'react'
import { Link } from "react-router-dom";

export default function Pr() {

  return (
    <div id='main'>
        <center>
        <div class="bouncing-text">
           <h5>CHOOSE ANY ONE...</h5>
        </div>
            <Link to={`/Cloth`}><h1>Cloth</h1></Link>
            <Link to={`/Electronic`}><h1>Electronic</h1></Link>
            <Link to={`/Furniture`}><h1>Furniture</h1></Link>
            <Link to={`/MakeUp`}><h1>Makeup</h1></Link>
        </center>
    </div>
  )
}