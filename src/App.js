import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.js';
import Portfolio from './pages/portfolio/Portfolio.js';
import Contact from './pages/contact/Contact';
// import Header from './components/Header/Header'
// import Footer from './components/Footer/index';
import DrawerAppBar from './components/DrawerAppBar/DrawerAppBar';


function App() {
  return (
    <>
  
    
    
    
    
    

    <Router>
    
      <DrawerAppBar />

      
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    
    </Router>
    </>
  );
}

export default App;
