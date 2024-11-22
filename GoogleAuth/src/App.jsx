import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogIn from './Component/LogIn'
import Dashboard from './Component/Dashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={LogIn}></Route>
        <Route path='/DashBoard' Component={Dashboard}></Route>
      </Routes>
    </BrowserRouter>
  )
}
