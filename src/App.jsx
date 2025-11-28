import React from 'react';
import { Routes ,BrowserRouter ,Route, Link } from 'react-router';
import navbar from './components/navbar';
import footer from './components/footer';
import Recettes from './pages/Recettes';
import Delete from './pages/delete';



export default function App() {
  return (
      
      <BrowserRouter>
      <navbar/>
        <Routes>
          <Route path="/" element={<home/>} />
          <Route path="/Recettes" element={<Recettes/>} />
          <Route path="/delete" element={<Delete/>} />

        </Routes>
        <footer/>
      </BrowserRouter>
    
  )
}






