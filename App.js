import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './src/pages/home/Home';
import Portfolio from './src/pages/portfolio/Portfolio';
import Contact from './src/pages/contact/Contact';
import Header from './src/components/Header/index'
import Footer from './src/components/Footer/index';


function App() {
  return (
    <Router>
    <div>
      <Header />
      
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
