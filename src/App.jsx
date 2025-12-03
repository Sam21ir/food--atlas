import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar'; 
import Footer from './components/footer';
import Home from './pages/home';
import Contact from "./pages/Contact";
import Recettes from './pages/Recettes';
import EditRec from './pages/editRec';
import Admin from './pages/Admin';
import Details from './pages/Details';



// const Recipes = () => <div>Page Recettes</div>;
// const Details = () => <div>Page Détails</div>;
// const Admin = () => <div>Espace Admin</div>;



export default function App() {
  return (
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Recettes" element={<Recettes/>} />
          <Route path="/Admin"  element={<Admin/>}  />
          <Route path="/addRec" element={<addRec/>} />
          <Route path="/EditRec/:id" element={<EditRec/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/details/:id" element={<Details/>} />
          
        </Routes>
        
        <Footer/>
      </BrowserRouter>
    
  )
}






