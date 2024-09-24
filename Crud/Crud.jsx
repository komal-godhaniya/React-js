import React, { useEffect, useState } from 'react'

export default function Crud() {

    const[name , setName] = useState("");
    const[sub , setSub] = useState("");
    const[city , setCity] = useState("");
    
    const[record , setRecord] = useState(null);

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("student")) || []
        setRecord(data)
    },[record])

    const handlAdd = () => {
        // console.log(name , sub , city)
        let user = {id: Date.now(),name,sub,city}
        record.push(user);
        localStorage.setItem("student",JSON.stringify(record))
    }



  return (
    <div>
        <h3>Crud With LocalStorage</h3>

        <input type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder='Enter Your Subject' onChange={(e) => setSub(e.target.value)}/>
        <input type="text" placeholder='Enter Your City' onChange={(e) => setCity(e.target.value)}/>

        <button onClick={handlAdd}>Add Data</button>

<br /><br />

        <table style={{border:"1px solid white",width:"100%"}}>
            <thead>
                <tr>
                    <th style={{border:"1px solid white"}}>id</th>
                    <th style={{border:"1px solid white"}}>name</th>
                    <th style={{border:"1px solid white"}}>subject</th>
                    <th style={{border:"1px solid white"}}>city</th>
                </tr>
            </thead>
            <tbody>
                {
                    record?
                    record.map((e,i)=>{
                        return <tr key={i}>
                            <td style={{border:"1px solid white"}}>{e.id}</td>
                            <td style={{border:"1px solid white"}}>{e.name}</td>
                            <td style={{border:"1px solid white"}}>{e.sub}</td>
                            <td style={{border:"1px solid white"}}>{e.city}</td>
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
