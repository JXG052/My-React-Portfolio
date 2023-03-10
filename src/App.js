import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/home/Home';
import Portfolio from './components/pages/portfolio/Portfolio';
import Contact from './components/pages/contact/Contact';

function App() {
  return (
    <Router>
    <div>
      <NavTabs />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Discover" element={<Portfolio />} />
        <Route path="Search" element={<Contact />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
