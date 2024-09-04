import React, { useState } from 'react'

export default function Count() {
    var [count , SetCount] = useState(0)

    var add = () => {
        SetCount(count+1)
    }
    var remove = () => {
        SetCount(count-1)
    }
    var reset = () => {
        SetCount(count = 0)
    }

  return (
    <div className="main">
    <div className='counter'>
        <h1>Counter</h1>
        <h2>{count}</h2>

        <div className="btn">
            <button onClick={add}><i class="fa-solid fa-plus"></i></button>
            <button onClick={remove}><i class="fa-solid fa-minus"></i></button>
            <button onClick={reset}><i class="fa-solid fa-rotate-right"></i></button>
        </div>

    </div>
    </div>
  )
}
