import React, { useState } from "react";
import axios from "axios";
import PopUpAdd from "../components/PopUpAdd";
import toast from "react-hot-toast";
import '../addRecStyle.css'

export default function AddRec() {
  const handleImageUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const formDataCloud = new FormData();
  formDataCloud.append("file", file);
  formDataCloud.append("upload_preset", "addRecieps"); // replace this
  formDataCloud.append("cloud_name", "dgqoop9qz"); // replace this

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dgqoop9qz/image/upload",
      formDataCloud
    );

    // Put the URL inside your "image" state
    setFormData(prev => ({
      ...prev,
      image: res.data.secure_url
    }));

    console.log("Uploaded:", res.data.secure_url);
  } catch (err) {
    console.error(err);
    alert("Image upload failed.");
  }
};
  const [formData, setFormData] = useState({
    nom: "",
    pays: "",
    image: "",
    description: "",
    ingredients: "",
    etapes: ""
  });

  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ 
      ...prev, 
      [e.target.name]: e.target.value 
    }));
  };

  // When clicking "Enregistrer"
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true); // Show popup instead of alert
  };

  // When user clicks CONFIRM inside the popup
  const handleConfirm = async () => {
    setLoading(true);

    const trimmed = {
      nom: formData.nom.trim(),
      pays: formData.pays.trim(),
      image: formData.image.trim(),
      description: formData.description.trim(),
      ingredients: formData.ingredients.trim(),
      etapes: formData.etapes.trim()
    };

    const ingredientsArray = trimmed.ingredients.split(",").map(i => i.trim());
    const etapesArray = trimmed.etapes.split("\n").map(e => e.trim());

    const newRecipe = {
      nom: trimmed.nom,
      pays: trimmed.pays,
      image: trimmed.image,
      description: trimmed.description,
      ingredients: ingredientsArray,
      etapes: etapesArray
    };

    try {
      await axios.post("http://localhost:3001/recipes", newRecipe); 
      // Reset form
      setFormData({
        nom: "",
        pays: "",
        image: "",
        description: "",
        ingredients: "",
        etapes: ""
      });
      toast.success("Recette ajouté avec succès !");
      setShowPopup(false); // Close popup
    } catch (error) {
      console.error(error);
      alert("Error saving recipe.");
    }

    setLoading(false);
  };

  // When user clicks MODIFY inside popup
  const handleCancel = () => {
    setShowPopup(false); // Just close popup, do nothing else
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
           type="file"
           accept="image/*"
           onChange={handleImageUpload}
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

        <label>Étapes (chaque étape sur une ligne) :</label>
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

      {showPopup && (
        <PopUpAdd
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}