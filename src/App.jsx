import React from 'react';
import { Routes ,BrowserRouter ,Route, Link } from 'react-router';
import navbar from './components/navbar';
import footer from './components/footer';
import Recettes from './pages/Recettes';
import Delete from './pages/Delete';
import Admin from './pages/Admin';
import addRec from './pages/addRec';
import EditRec from './pages/editRec';
import PopUp from './components/PopUp';



export default function App() {
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






