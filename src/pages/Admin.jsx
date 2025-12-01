import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link , useNavigate} from 'react-router';
import Card from '../components/Card'

export default function Admin() {
  const [db, setDb] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate=useNavigate(); 

  // GET dishes from API
  useEffect(() => {
    axios.get("http://localhost:3001/plats")
      .then((res) => {
        setDb(res.data);

        // Extract categories
        const uniqueCategories = [...new Set(res.data.map(plat => plat.category))];
        setCategories(uniqueCategories);
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
      });
  }, []);

  // Filter dishes
  const filteredPlats = selectedCategory
    ? db.filter((plat) => plat.category === selectedCategory)
    : [];

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
        </div>
      </section>

      <section className='Plats'>
        <div className='header'>
          <button onClick={()=>{navigate('/')}}>Retour à l'acceuil</button>
          <h1>Our Recettes</h1>
          <button onClick={()=>{navigate('/Recettes')}}>Admin</button>
        </div>
        <div className='card'>
          {filteredPlats.map((plat) => (
            <Card key={plat.id} plat={plat} isAdmin ={true} />
          ))}
        </div>
      </section>

    </div>
  );


}
