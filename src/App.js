import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Pages from "./Pages";
import "./App.css";
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className='Figma'>
      <Navbar/>
      <Pages/>
      <Footer/>
    </div>
  )
}
export default App;