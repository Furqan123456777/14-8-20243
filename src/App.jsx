import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Screen/Home'
import Createuser from './Screen/Createuser'

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Home />} />
      <Route path='/create' element={<Createuser />} />
    </Routes>
    </>
  )
}

export default App
