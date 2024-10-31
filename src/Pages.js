import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home";
import "./Pages.css";
function Pages() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}
export default Pages;