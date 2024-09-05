import React, { useState } from 'react'

export default function On() {

    const[count , setCount] = useState(0);
    const[name , setName] = useState("");
    const[sub , setSub] = useState("");

    const[isVisible , setVisible] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("form submitted");
        let obj = {
            name : name,
            subject : sub
        }
        console.log(obj)
    }


  return (
    
    <div>
        <h1>Onclick , Onchange , Onsubmit</h1>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Click</button>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
            <input type="text" placeholder='Enter Your Name : ' onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder='Enter Your Subject : ' onChange={(e) => setSub(e.target.value)}/>
            <button  type='submit'>Submit</button>
        </form>

        <h1>Visible/Invisible</h1>

        {
            isVisible ? <h3>hye</h3> : <h3>bye</h3>
            
        }

        <button onClick={() => setVisible(!isVisible)}>Click</button>

    </div>
  )
}
