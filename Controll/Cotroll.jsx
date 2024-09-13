import React, { useState } from 'react'

export default function Cotroll() {

    const[name , setName] = useState('');

    const handleChange = (e) => {
        console.log(e.target.value)
    }

  return (
    <div>
        <h1>ControlledCom</h1>
        <input type="text" placeholder='Enter Name' onChange={(e) => handleChange(e)}/>
    </div>
  )
}
