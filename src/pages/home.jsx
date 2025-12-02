import React from 'react';
import { Link } from 'react-router-dom';
import '../home.css';

// IMPORTS DE TES FICHIERS DANS assets
// adapte les noms / extensions si nécessaire
import heroVideo from '../assets/herovid.mp4';
import pizzaImg from '../assets/pizza.jpg';
import tagineImg from '../assets/tagine.jpg';
import tacosImg from '../assets/tacos.jpg';
import aboutImg from '../assets/about.jpg';
import abouteImg from '../assets/aboute.jpg';

const CTA_TEXT = "VOIR RECETTES";

const categories = [
  { country: 'Maroc', image: tagineImg, label: 'Tagine' },
  { country: 'Italie', image: pizzaImg, label: 'Pizza' },
  { country: 'Mexique', image: tacosImg, label: 'Tacos' },
];

const Home = () => {
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
          <h1>Food Atlas</h1>
          <p>
            Explorez des recettes authentiques venues du Maroc, d&apos;Italie, du Mexique et d&apos;ailleurs.
          </p>
          <Link to="/recettes" className="cta-button">
            {CTA_TEXT}
          </Link>
        </div>
      </section>

      {/* SECTION À PROPOS */}
      <section className="about-us-section">
        <h2>À propos de Food Atlas</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={aboutImg} alt="Food Atlas" />
          </div>
          <div className="about-text">
            <p>
              Food Atlas t&apos;invite à voyager à travers des saveurs et des traditions culinaires du monde entier.
            </p>
            <Link to="/recettes" className="cta-button secondary">
              Découvrir les recettes
            </Link>
          </div>
          <div className="about-image">
            <img src={aboutImg} alt="Food Atlas" />
          </div>
        </div>
      </section>

      {/* SECTION CATÉGORIES AVEC TES 3 IMAGES */}
      <section className="categories-section">
        <h2 className="section-title">Catégories populaires</h2>
        <div className="categories-grid">
          {categories.map((cat, index) => (
            <div className="category-card" key={index}>
              <img src={cat.image} alt={cat.label} />
              <h3>{cat.label}</h3>
              <p>{cat.country}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};


export default Home;