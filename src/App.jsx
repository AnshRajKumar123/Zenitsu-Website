import React from 'react'
import Navbar from './ComponentJSX/Navbar'
import Home from './ComponentJSX/Home'
import { Route, Routes } from 'react-router-dom'
import Cursor from './ComponentJSX/Cursor'

const App = () => {
  return (
    <>
      <Navbar />
      <Cursor />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App