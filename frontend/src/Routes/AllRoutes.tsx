import React from 'react'
import { Route, Routes } from "react-router-dom";
import Dashboard from '../Pages/Dashboard';
import { Help } from '../Pages/Help';
import Interview from '../Pages/Interview';
const AllRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Dashboard />} />
       <Route path="/Interview" element={<Interview />} />
       <Route path="/Help" element={<Help />} />
    </Routes>
  )
}

export default AllRoutes
