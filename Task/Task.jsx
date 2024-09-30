import React, { useEffect, useState } from 'react'

export default function Task() {

    const[name,setName] = useState("")
    const[subject,setSubject] = useState("")
    const[priority,setPriority] = useState("")
    const[date,setDate] = useState("")
    const[status,setStatus] = useState("")

    const[record,setRecord] = useState(null)
    const[editIndex,setEditIndex] = useState(null)

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("Task")) || []
        setRecord(data)
    },[])

   
    const handleAdd = () => {
       
        let user = {id :Date.now(),name,subject,priority,date,status:"pending..."}
        console.log(name,subject,priority,date,status)
        let oldRecord = JSON.parse(localStorage.getItem("Task")) || []
       
        if (editIndex) {
          let singleData = record.find((item)=> item.id == editIndex)
          singleData.id = editIndex
          singleData.name = name
          singleData.subject = subject
          singleData.priority = priority
          singleData.date = date
          singleData.status = status
          localStorage.setItem("Task",JSON.stringify(record))
          setEditIndex(null)
      }
        
        else{
          oldRecord.push(user)
          setRecord(oldRecord)
          localStorage.setItem("Task",JSON.stringify(oldRecord))
        }

        setName("")
        setSubject("")
        setPriority("")
        setDate("")
        setStatus("")
    }

    const handleDelete = (id) => {
      let DeleteData = record.filter((item) => item.id != id)
      setRecord(DeleteData)
      localStorage.setItem("Task",JSON.stringify(DeleteData))
  }

  const handleEdit = (id) => {
      let singleData = record.find((item) => item.id == id)
      setName(singleData.name)
      setSubject(singleData.subject)
      setPriority(singleData.priority)
      setDate(singleData.date)
      setDate(singleData.status)
      setEditIndex(id)
  }

  const handleComplete = (id) => {
    let singleData = record.find((item)=> item.id == id)

    if (singleData) {
      singleData.status = "Completed";
    }
  

    localStorage.setItem("Task",JSON.stringify(record))
    setRecord(record.slice())
  }

  return (
    <div className='task-manager'>
      <h1>Task-Manager</h1>
        <input type="text" value={name} placeholder='Enter Your Name...' onChange={(e) => setName(e.target.value)} />
        <input type="text" value={subject} placeholder='Enter Your Subject...' onChange={(e) => setSubject(e.target.value)} />
        <select name="Priority" value={priority} onChange={(e)=> setPriority(e.target.value)}>
          <option>Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
        <center>
        <button id='add' onClick={() => handleAdd()}>{editIndex ? "Update" : "Add"}</button>
        </center>

        <table>
            <thead>
                <tr>
                    <th style={{border:"1px solid black",textAlign:"center",padding:"12px",color:"green"}}>id</th>
                    <th style={{border:"1px solid black",textAlign:"center",padding:"12px",color:"green"}}>name</th>
                    <th style={{border:"1px solid black",textAlign:"center",padding:"12px",color:"green"}}>subject</th>
                    <th style={{border:"1px solid black",textAlign:"center",padding:"12px",color:"green"}}>priority</th>
                    <th style={{border:"1px solid black",textAlign:"center",padding:"12px",color:"green"}}>Date</th>
                    <th style={{border:"1px solid black",textAlign:"center",padding:"12px",color:"green"}}>status</th>
                    <th colSpan={3} style={{border:"1px solid black",textAlign:"center",padding:"12px",color:"green"}}>action</th>
                </tr>
            </thead>
            <tbody>
                {
                    record?
                    record.map((e,i)=>{
                        return <tr key={i}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.subject}</td>
                            <td>{e.priority}</td>
                            <td>{e.date}</td>
                            <td>{e.status}</td>
                            <td>
                                <button onClick={() => handleEdit(e.id)}>Edit</button>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(e.id)}>Delete</button>
                            </td>
                            <td>
                              <button onClick={()=>handleComplete(e.id)}>Complete</button>
                            </td>
                        </tr>
                    })
                    :
                    ""
                }
            </tbody>
        </table>





    </div>
  )
}
