import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pr from './Search/Pr'
import Cloth from './Search/Cloth'
import Electronic from './Search/Electronic'
import Furniture from './Search/Furniture'
import MakeUp from './Search/MakeUp'

export default function App() {
  return (
    <>
    <div id='header'>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Pr/>}></Route>
            <Route path='/Cloth' element={<Cloth/>}></Route>
            <Route path='/Electronic' element={<Electronic/>}></Route>
            <Route path='/Furniture' element={<Furniture/>}></Route>
            <Route path='/MakeUp' element={<MakeUp/>}></Route>
        </Routes>
    </BrowserRouter>
  </div>
  <div id="section">
      <marquee behavior="" direction="right" scrollamount="15"><h1>cloth🎀 Electronic📲 Furniture🛋 Make-up💄</h1></marquee>  
  </div>
</>
)
}
