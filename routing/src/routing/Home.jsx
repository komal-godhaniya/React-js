import React from 'react'
import { Link } from 'react-router-dom'

export default function Home({data}) {
  return (
    <div className='main'>
      <br />
      <center>
        <h1>Home</h1>
      </center>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <Link to={"/create"}>create</Link> &nbsp;&nbsp;&nbsp;
        <Link to={"/delete"}>delete</Link> &nbsp;&nbsp;&nbsp;
        <Link to={"/update"}>update</Link>

        <br /><br />

        <table style={{border:"1px solid black"}}>
              <thead style={{border:"1px solid black"}}>
                <tr>
                    <th style={{border:"1px solid black",textAlign:"center"}}>Id</th>
                    <th style={{border:"1px solid black",textAlign:"center"}}>Name</th>
                    <th style={{border:"1px solid black",textAlign:"center"}}>Subject</th>
                    <th style={{border:"1px solid black",textAlign:"center"}}>City</th>
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
                            <td style={{border:"1px solid black",textAlign:"center"}}>{e.city}</td>
                        </tr>
                    })
                }
              </tbody>
        </table>
        <br />
    </div>
    
  )
}
