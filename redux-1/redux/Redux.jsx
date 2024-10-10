import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from '../features/Slice'

export default function Redux() {
    const count = useSelector((state)=>{
        return state.counterKey
    })

    const dispatch = useDispatch()
  return (
    <div>
        <h1>Redux</h1>
        <h1>{count.count}</h1>  
         <button onClick={()=> dispatch(increment())}>+</button>
         <button onClick={()=> dispatch(decrement())}>-</button>
    </div>
  )
}
