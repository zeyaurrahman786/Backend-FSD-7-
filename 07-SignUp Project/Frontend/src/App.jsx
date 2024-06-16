// eslint-disable-next-line no-unused-vars
import React from 'react'
import SignUp from './SignUp'
import LogIn from './LogIn'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  )
}

export default App