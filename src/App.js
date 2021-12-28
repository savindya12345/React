import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import NavBar from './navBar';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
