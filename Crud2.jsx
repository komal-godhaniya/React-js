import React, { useState ,useEffect } from 'react'

export default function Crud2() {

    const[name , setName] = useState("")
    const[sub , setSub] = useState("")
    const[city , setCity] = useState("")
    
    const[record , setRecord] = useState(null)
    const[editIndex , setEditIndex] = useState(null)

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("student")) || []
        setRecord(data)
    },[])

    const handleAdd = () => {
        // console.log(name , sub , city)
        let user = {id: Date.now(),name,sub,city}
        // record.push(user);
        // localStorage.setItem("student",JSON.stringify(record))

        let oldRecord = JSON.parse(localStorage.getItem("student")) || []
        oldRecord.push(user)
        setRecord(oldRecord)
        localStorage.setItem("student",JSON.stringify(oldRecord))

        setName("")
        setSub("")
        setCity("")
    }

    const handleDelete = (id) => {
        let DeleteData = record.filter((item) => item.id != id)
        setRecord(DeleteData)
        localStorage.setItem("student",JSON.stringify(DeleteData))
    }

    const handleEdit = (id) => {
        let singleData = record.find((item) => item.id == id)
        setName(singleData.name)
        setSub(singleData.sub)
        setCity(singleData.city)
        setEditIndex(id)
    }


  return (
    <div>
        <h3>Crud With LocalStorage</h3>

        <input type="text" value={name} placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)}/>
        <br /><br />
        <input type="text" value={sub} placeholder='Enter Your Subject' onChange={(e) => setSub(e.target.value)}/>
        <br /><br />
        <input type="text" value={city} placeholder='Enter Your City' onChange={(e) => setCity(e.target.value)}/>
        <br /><br />
        <button onClick={() => handleAdd()}>{editIndex ? "Update Data" : "Add Data"}</button>
        <br /><br />

        <table style={{border:"1px solid white",width:"60%"}}>
            <thead>
                <tr>
                    <th style={{border:"1px solid black"}}>id</th>
                    <th style={{border:"1px solid black"}}>name</th>
                    <th style={{border:"1px solid black"}}>subject</th>
                    <th style={{border:"1px solid black"}}>city</th>
                    <th colSpan={2} style={{border:"1px solid black"}}>action</th>
                </tr>
            </thead>
            <tbody>
                {
                    record?
                    record.map((e,i)=>{
                        return <tr key={i}>
                            <td style={{border:"1px solid black"}}>{e.id}</td>
                            <td style={{border:"1px solid black"}}>{e.name}</td>
                            <td style={{border:"1px solid black"}}>{e.sub}</td>
                            <td style={{border:"1px solid black"}}>{e.city}</td>
                            <td style={{border:"1px solid black"}}>
                                <button onClick={() => handleEdit(e.id)}>Edit</button>
                            </td>
                            <td style={{border:"1px solid black"}}>
                                <button onClick={() => handleDelete(e.id)}>Delete</button>
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
