import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'; 
import Footer from './components/footer';
import Home from './pages/home';
import RecipeDetails from './pages/RecipeDetails';

const Recipes = () => <div>Page Recettes</div>;
const Details = () => <div>Page Détails</div>;
const Contact = () => <div>Page Contact</div>;
const Admin = () => <div>Espace Admin</div>;

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar /> 
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recettes" element={<Recipes />} />
            <Route path="/recettes/:id" element={<RecipeDetails />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/*" element={<Admin />} /> 
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;