import React, { useRef } from 'react'

export default function UnControll() {
    const inputRef = useRef();
    const handleClick = () =>{
        let value = inputRef.current.value
        alert("Input Value is ${value}")
    }
  return (
    <div>
        <h1>UnControll</h1>

        <input type="text" ref={inputRef} /><br/><br/>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}