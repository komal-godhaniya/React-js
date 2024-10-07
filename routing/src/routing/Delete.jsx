import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Delete({data,setData}) {
  const navigate = useNavigate()
  const [id,setId] = useState("")

  const handleDelete = () => {
    let deleteData = data.filter((item) => item.id != id)
    setData(deleteData)
    navigate("/")
  }
  return (
    <div>
        <center>
            <h1>Delete</h1>
      <input type="text" placeholder='Enter Any Id...' onChange={(e)=>setId(e.target.value)}/> <br />
      <button onClick={handleDelete}>Delete</button>
      </center>

    </div>
  )
}
