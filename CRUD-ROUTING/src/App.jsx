import React, { useState } from 'react'
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Component/Home'
import Create from './Component/Create'
import Delete from './Component/Delete'
import Update from './Component/Update'

export default function App() {
  const[data,setData] =  useState(
    [
      {id:1,name:"komal",subject:"react"},
      {id:1,name:"naksh",subject:"js"},
    ]
  )
  return (
    <div>
      <BrowserRouter>
         <Routes>
          <Route id='route1' path='/' element={<Home data={data}/>}></Route> 
          <Route path='/create' element={<Create data={data} setData={setData}/>}></Route>
          <Route path='/delete' element={<Delete data={data} setData={setData}/>}></Route>
          <Route path="/update" element={<Update data={data} setData={setData} />} /></Routes>
      </BrowserRouter>
    </div>
  )
}
