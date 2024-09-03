import React from 'react'

export default function UseEffect() {
    const[count,SetCount] = useState(0)

    UseEffect(() => {
        console.log("Effect Running")
    },[count])


  return (
    <div>
        <h1>UseEffect</h1>
        <h3>{count}</h3>
        <button onClick={() => SetCount(count+1)}>Add</button>
    </div>
  )
}
