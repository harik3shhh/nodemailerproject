import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Email from './pages/Email'
import Errorpage from './pages/Errorpage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Email/>} />

          <Route path='*'  element={<Errorpage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App