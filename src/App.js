import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import Header from './components/Header/index'

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
    </div>
  </Router>
  );
}

export default App;
