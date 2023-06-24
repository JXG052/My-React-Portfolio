import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.js';
import Portfolio from './pages/portfolio/Portfolio.js';
import Contact from './pages/contact/Contact';
import About from './pages/about/About.js'
// import Header from './components/Header/Header'
// import Footer from './components/Footer/index';
import DrawerAppBar from './components/DrawerAppBar/DrawerAppBar';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material/styles';



function App() {
  const theme = useTheme();
  return (
    <Box sx={{ bgcolor: theme.palette.offWhite.main, height: '100vh' }}>
      <Router>
        <DrawerAppBar />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
