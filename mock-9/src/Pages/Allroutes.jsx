import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Components/Login';
import Cart from './Cart';
import Restaurant from './Restaurant';

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/restaurant" element={<Restaurant />} />
      <Route path="/" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Allroutes;
