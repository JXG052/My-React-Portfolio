import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.js';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
// import Header from './components/Header/Header'
// import Footer from './components/Footer/index';
import DrawerAppBar from './components/DrawerAppBar/DrawerAppBar';


function App() {
  return (
    <>
  
    
    
    
    
    <DrawerAppBar />
    

    <Router>
    <div>
      
      
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>

    </div>
    </Router>
    </>
  );
}

export default App;
