import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3001/recipes/${id}`)
      .then(res => setRecipe(res.data)) 
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);
  console.log('===== res est = ', res)

  if (loading) return <p>Loading...</p>;
  if (!recipe) return <p>Recette introuvable.</p>;

  return (
    <div className="details-container">
      <img src={recipe.image} alt={recipe.name} className="main-image" />
      <h1>{recipe.name}</h1>
      <h3>Origine : {recipe.country}</h3>
      <p>{recipe.description}</p>

      <h2>Ingrédients :</h2>
      <ul>
        {recipe.ingredients.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>

      <h2>Étapes :</h2>
      <ol>
        {recipe.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>

      <Link to="/">⬅ Retour</Link>
    </div>
  );
}













































