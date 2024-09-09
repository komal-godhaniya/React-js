import React, { useEffect, useRef } from 'react'

export default function ListKey() {

    const arr = ["Apple" , "Mango" , "Strawberry" , "Cherry"]

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            inputRef.current.focus();
        },3000)
    })



  return (
        <div>
            <h1>ListKey</h1>
            {
               arr.map((e,i) =>  {
                    return <p key={i}>{e}</p>
               })
               
            }
            <br />
            <h1>useRef</h1>
            <input type="text" ref={inputRef} />
        </div>
)
}
