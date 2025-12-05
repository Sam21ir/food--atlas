import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe, FaUtensils, FaHeart } from "react-icons/fa";
import '../home.css';
import axios from 'axios';

// IMPORTS DE TES FICHIERS DANS assets
// adapte les noms / extensions si nécessaire
import heroVideo from '../assets/herovid.mp4';
import pizzaImg from '../assets/pizza.jpg';
import tagineImg from '../assets/tagine.jpg';
import tacosImg from '../assets/tacos.jpg';


import platMaroc from "../assets/flags/maroc.jpg";
import platItaly from "../assets/flags/italien.jpg";
import platSpain from "../assets/flags/spain.jpg";
import platMexic from "../assets/flags/mexican.jpg";

const CTA_TEXT = "VOIR RECETTES";


const categoryImages = {
  Moroccan: platMaroc,
  Mexican: platItaly,
  Italian: platSpain,
  Spanish: platMexic,
};


const Home = () => {

  const [category,setCategory]=useState([]);
  const [db,setDb]=useState([]);

  useEffect(()=>{
    axios
      .get("http://localhost:3001/recipes")
      .then((res)=>{
        setDb(res.data)
        const uniqueCategories = [...new Set(res.data.map(plat => plat.pays))];
        setCategory(uniqueCategories);
        
      })
      .catch((err)=>{
        console.log("error in fetching data",err);
      })
  },[])

  

  return (
    <div>

      {/* HERO SECTION AVEC VIDEO */}
      <section className="hero-section">
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-content">
          <h1 className='homeTitle'>Welcome to Food Atlas</h1>
          <p>
            Explorez des recettes authentiques du monde entier, préparées avec passion et partagées avec amour.
          </p>
          <Link to="/recettes" className="cta-button">
            Explorer les recettes
          </Link>
        </div>
      </section>

      {/* SECTION À PROPOS */}
      <h1 className='aboutTitle'>Porqoui nous choisir</h1>
      <section className="features-section">

          <div className="feature-card">
            <div className="icon-wrapper">
              <FaGlobe size={50} color="#ff8c5a" />
            </div>
            <h3>Cuisine Mondiale</h3>
            <p>Des recettes authentiques de tous les continents</p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper">
              <FaUtensils size={50} color="#ff8c5a" />
            </div>
            <h3>Facile à Suivre</h3>
            <p>Instructions claires étape par étape</p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper">
              <FaHeart size={50} color="#ff8c5a" />
            </div>
            <h3>Fait Maison</h3>
            <p>Des ingrédients frais et naturels</p>
          </div>
     </section>


      {/* SECTION CATÉGORIES AVEC TES 3 IMAGES */}
      <section className="categories-section">
        <h2 className="section-title">Our Catégories</h2>
        <div className="categories-grid">
          {category.map((cat, index) => (
            <div className="category-card" key={index}>
              <img 
                src={categoryImages[cat] }  
                alt={cat}
              />
              <h3>{cat}</h3>
            </div>
           ))}
        </div>
      </section>
    </div>
  );
};


export default Home;