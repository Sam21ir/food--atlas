import React, { useState } from "react";
import axios from "axios";

export default function AddRec() {
  const [formData, setFormData] = useState({
    nom: "",
    pays: "",
    image: "",
    description: "",
    ingredients: "",
    etapes: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ 
      ...prev, 
      [e.target.name]: e.target.value 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1️⃣ تنظيف النصوص
    const trimmed = {
      nom: formData.nom.trim(),
      pays: formData.pays.trim(),
      image: formData.image.trim(),
      description: formData.description.trim(),
      ingredients: formData.ingredients.trim(),
      etapes: formData.etapes.trim()
    };

    // 2️⃣ تحويل النصوص إلى arrays
    const ingredientsArray = trimmed.ingredients.split(",").map(i => i.trim());
    const etapesArray = trimmed.etapes.split("\n").map(e => e.trim());

    // 3️⃣ object النهائي لي غادي يتبعت
    const newRecipe = {
      nom: trimmed.nom,
      pays: trimmed.pays,
      image: trimmed.image,
      description: trimmed.description,
      ingredients: ingredientsArray,
      etapes: etapesArray
    };

    setLoading(true);

    try {
      await axios.post("http://localhost:3001/recipes", newRecipe); //to run the server: "json-server --watch db.json --port 3001"

      alert("Recette ajoutée avec succès !");

      // 4️⃣ reset form
      setFormData({
        nom: "",
        pays: "",
        image: "",
        description: "",
        ingredients: "",
        etapes: ""
      });

    } catch (error) {
      alert("Erreur lors de l'ajout. Vérifiez le serveur.");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="add-rec-container">
      <h2>Ajouter une recette</h2>

      <form onSubmit={handleSubmit}>
        
        <label>Nom :</label>
        <input 
          type="text" 
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />

        <label>Pays / Catégorie :</label>
        <input 
          type="text" 
          name="pays"
          value={formData.pays}
          onChange={handleChange}
          required
        />

        <label>Image (URL) :</label>
        <input 
          type="text" 
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <label>Description :</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label>Ingrédients (séparés par virgules) :</label>
        <textarea
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          required
        />

        <label>Étapes (chaque étape sur ligne):</label>
        <textarea
          name="etapes"
          value={formData.etapes}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Enregistrement..." : "Enregistrer"}
        </button>

      </form>
    </div>
  );
}



