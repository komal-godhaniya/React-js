import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addData, deleteData, updateData } from '../features/TodoSlice';

export default function Redux() {

  const [name,setName]=useState("");
  const [subject,setSub]=useState("");
  const [editIndex,setEditIndex] = useState(null);

    const count = useSelector((state)=>{
        return state.todoKey
    })

    const dispatch = useDispatch();

    const addRecord = () =>{
      if(editIndex == null){
        dispatch(addData({id:Date.now(), name , subject}))
      }
      else{
        dispatch(updateData({id: editIndex , name , subject}))
        setEditIndex(null)
      }
      setName("")
      setSub("")
    }
    const deleteRecord = (id) => {
      dispatch(deleteData(id))
    }

    const editRecord=(id)=>{
      let singleData = count.students.find((item)=>item.id==id)
      setName(singleData.name)
      setSub(singleData.subject)
      setEditIndex(id)
    }
  return (
    <div>
      <h1>Redux todo</h1>
      <input type="text" placeholder='Name' value={name} onChange={(e) => setName (e.target.value)} />
      <input type="text" placeholder='Subject' value={subject} onChange={(e) => setSub (e.target.value)} />
      <button onClick={addRecord}>{editIndex ? "updateData" : "addData"}</button>

      {
        count ?
        count.students.map((e,i)=>{
          return <ul key={i}>
                <li>{e.id}</li>
                <li>{e.name}</li>
                <li>{e.subject}</li>
                <button onClick={()=>editRecord(e.id)}>Edit</button>
                <button onClick={()=> deleteRecord(e.id)}>delete</button>
          </ul>
        })
        :
        <p>No data</p>
      }


    </div>
  )
}
