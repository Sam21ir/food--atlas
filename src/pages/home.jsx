import React from 'react';
import { Link } from 'react-router-dom';
import '../home.css';

const VIDEO_URL = 'votre-video-url.mp4'; 
const CTA_TEXT = "VOIR RECETTES";

const categories = [
  {
    country: 'Maroc',
    image: <span role="img" aria-label="tajine">🍲</span>,
  },
  {
    country: 'Italie',
    image: <span role="img" aria-label="pizza">🍕</span>,
  },
  {
    country: 'Mexique',
    image: <span role="img" aria-label="taco">🌮</span>,
  },
];

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <video autoPlay loop muted className="hero-video">
          <source src={VIDEO_URL} type="video/mp4" />
          Votre navigateur ne supporte pas la balise vidéo.
        </video>
        <div className="hero-content">
          <h1>Découvrez les saveurs du monde avec Food Atlas</h1>
          <p>Explorez des recettes authentiques venues du Maroc, d'Italie, du Mexique et ailleurs</p>
          <Link to="/Recettes" className="cta-button">
            {CTA_TEXT}
          </Link>
        </div>
      </section>

     
      <section className="about-us-section" style={{ backgroundColor: '#F7F7F0' }}>
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-image left">
            
          </div>
          <div className="about-text">
            <p>Food Atlas nous invite à emplesser notre goût avec des saveurs d'une illustre cuisinelle, parmiguer den et des traditions auff aulthiques, et calorations de la cuisine internationale.</p>
            <Link to="/Recettes" className="cta-button secondary">VOIR RECETTES</Link>
          </div>
          <div className="about-image right">
          
          </div>
        </div>
      </section>

      <section className="categories-section">
        <h2 className="section-title">Notre Catégorie</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.country} className="category-card">
              <div className="category-image-placeholder">{category.image}</div>
              <h3>{category.country}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;