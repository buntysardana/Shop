import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from '../../screens/agent/supplier/Dashboard';
import Product from '../../screens/agent/supplier/Product';
import Review from '../../screens/admin/Reviews';
import Catalog from '../../screens/agent/catalog/Catalog';
import Protected from '../../screens/Protected';
export default function index() {
  return (
    <Routes>
      
      <Route path="/home" element={<Protected cmp={Dashboard} />} />
      <Route path="/product" element={<Protected cmp={Product} />} />
      <Route path="/review" element={<Protected cmp={Review} />} />
      {/* <Route path="/settings" element={<Settings />} /> */}
      <Route path="/catalog" element={<Protected cmp={Catalog} />}/>
      {/* <Navigate to="/agent" /> */}
    </Routes>
  )
}
