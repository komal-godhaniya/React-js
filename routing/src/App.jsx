// import React from 'react'
// import Home from './routing/Home'

import React, { useState } from 'react'
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './routing/Home'
import Create from './routing/Create'
import Delete from './routing/Delete'
import Update from './routing/Update'



export default function App() {
  const[data,setData] =  useState(
    [
      {id:1,name:"komal",subject:"react",city:"Rajkot"},
      {id:2,name:"naksh",subject:"js",city:"Mumbai"},
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

