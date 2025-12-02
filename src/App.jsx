import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from "./pages/Contact";

const Recipes = () => <div>Page Recettes</div>;
const Details = () => <div>Page Détails</div>;
// const Contact = () => <div>Page Contact</div>;
const Admin = () => <div>Espace Admin</div>;
import Recettes from './pages/Recettes';
// import Contact from './pages/Contact';

function App() {
  return (
      
      <BrowserRouter>
      <navbar/>
        <Routes>
          <Route path="/" element={<home/>} />
          <Route path="/Recettes" element={<Recettes/>} />
          <Route path="/delete" element={<Delete/>} />
          <Route path="/Admin"  element={<Admin/>}  />
          <Route path="/addRec" element={<addRec/>} />
          <Route path="/EditRec/:id" element={<EditRec/>} />
        </Routes>
        
        <footer/>
      </BrowserRouter>
    
  )
}






