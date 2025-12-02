import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import Home from './pages/Home';
import Recettes from './pages/Recettes';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar /> 
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Recettes" element={<Recettes />} />
            <Route path="/contact" element={<Contact />} />
           
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;