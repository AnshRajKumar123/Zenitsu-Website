import React from 'react'
import Navbar from './ComponentJSX/Navbar'
import Home from './ComponentJSX/Home'
import { Route, Routes } from 'react-router-dom'
import AnimationSector from './ComponentJSX/AnimationSector'
import Cursor from './ComponentJSX/Cursor'

const App = () => {
  return (
    <>
      <Navbar />
      <AnimationSector />
      <Cursor />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App