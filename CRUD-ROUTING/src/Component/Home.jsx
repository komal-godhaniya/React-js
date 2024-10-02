import React from 'react'
import { Link } from 'react-router-dom'

export default function Home({data}) {
  return (
    <div>
        <h1>Home</h1>
        <Link to={"/create"}>create</Link>
        <Link to={"/delete"}>delete</Link>
        <Link to={"/update"}>update</Link>

        <table style={{border:"1px solid black",width:"50%"}}>
              <thead style={{border:"1px solid black"}}>
                <tr>
                    <th style={{border:"1px solid black",textAlign:"center"}}>Id</th>
                    <th style={{border:"1px solid black",textAlign:"center"}}>Name</th>
                    <th style={{border:"1px solid black",textAlign:"center"}}>Subject</th>
                </tr>
              </thead>
              <tbody>
                {
                    data && 
                    data.map((e,i) => {
                        return <tr key={i}>
                            <td style={{border:"1px solid black",textAlign:"center"}}>{e.id}</td>
                            <td style={{border:"1px solid black",textAlign:"center"}}>{e.name}</td>
                            <td style={{border:"1px solid black",textAlign:"center"}}>{e.subject}</td>
                        </tr>
                    })
                }
              </tbody>
        </table>
    </div>
  )
}
