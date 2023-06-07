import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Login from '../screens/Login'
import PageNotFound from '../screens/PageNotFound'
export default function index() {
  return (
    <Routes>
      
      <Route path="/login" element={<Login />} />
      <Route path="/not-authorized" element={<PageNotFound />} />


    </Routes>
  )
}
