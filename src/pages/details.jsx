import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./Details.css";

export default function Details() {

  const { id } = useParams();

  const [recipe, setRecipe] = useState({
    nom: "",
    pays: "",
    image: "",
    description: "",
    ingredients: [],
    etapes: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3001/recipes/${id}`)
      .then((res) => {
        console.log(res.data); 
        setRecipe(res.data);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!recipe) return <p>Recette introuvable.</p>;

  return (
    <div className="details-container">
      <div>
        <img src={recipe.image} alt={recipe.nom} className="main-image" />
      </div>

      <div className="content">
        <h1>{recipe.nom}</h1>
        <h3>Origine : {recipe.pays}</h3>
        <p>{recipe.description}</p>

        <h2>Ingrédients :</h2>
        <ul>
          {recipe.ingredients?.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>

        <h2>Étapes :</h2>
        <ol>
          {recipe.etapes?.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>

        <Link className="btn-retour" to="/">⬅ Retour</Link>
      </div>
    </div>
  );
}















































