import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminDetails from '../Components/AdminDetails'
import UserDetails from '../Components/UserDetails'
import Admin from './Admin'
import Hotel from './Hotel'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminDetails />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/user" element={<UserDetails />} />
      </Routes>
    </div>
  )
}

export default Allroutes