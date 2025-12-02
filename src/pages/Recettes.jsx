import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link , useNavigate} from 'react-router';
import Card from '../components/Card';
import './Recettes.css';

export default function Recettes() {
  const [db, setDb] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");   // 🔍 NEW
  const navigate=useNavigate(); 

  // GET dishes from API
  useEffect(() => {
    axios.get("http://localhost:3001/recipes")
      .then((res) => {
        setDb(res.data);

  // Extract categories
        const uniqueCategories = [...new Set(res.data.map(plat => plat.pays))];
        setCategories(uniqueCategories);
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
      });
  }, []);

  // Filter recipes
  const allRecipesFilteredByName = db.filter((plat) =>
    plat.nom.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const filteredByCategory = db.filter((plat) =>
    selectedCategory ? plat.pays === selectedCategory : true
  );

  return (
    <div className='RecettesContainer'>

      <section className='sideBare'>
        <h1>Pays</h1>
        <hr />
        <div className='buttonDiv'>
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
            {selectedCategory && (
            <button onClick={() => setSelectedCategory(null)}>Tout afficher</button>
          )}
        </div>
      </section>

      <section className='Recettes'>
        <section className='header'>
        
          <button onClick={()=>{navigate('/')}}>Retour à l'acceuil</button>
          <h1>Our Recettes</h1>
          <button onClick={()=>{navigate('/Admin')}}>Admin</button>

          {/* 🔍 SEARCH INPUT */}
        <input
          type="text"
          placeholder="Rechercher un plat..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="searchInput"
        />

      </section>

       {!selectedCategory ? (
        <section className='allReciepes'>
          <div className='card'>
            {allRecipesFilteredByName.map((plat) => (
              <Card key={plat.id} plat={plat} />
            ))}
          </div>
        </section>
      ) : (
        <section className='Plats'>
          <div className='card'>
            {filteredByCategory.map((plat) => (
              <Card key={plat.id} plat={plat} />
            ))}
          </div>
        </section>
      )}

      </section>

    </div>
  );
}
