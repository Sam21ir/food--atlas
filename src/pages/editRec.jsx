import React, { useEffect, useState } from "react";
import axios from "axios";
import PopUp from "../components/PopUpAdd";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import './editRec.css'

export default function EditRec() {
  const { id } = useParams();
  const navigate = useNavigate();

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

  // Load old data
  useEffect(() => {
    axios
      .get(`http://localhost:3001/recipes/${id}`)
      .then((res) => {
        const rec = res.data;
        setFormData({
          nom: rec.nom,
          pays: rec.pays,
          image: rec.image,
          description: rec.description,
          ingredients: rec.ingredients.join(", "),
          etapes: rec.etapes.join("\n"),
        });
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleConfirm = async () => {
    setLoading(true);

    const update = {
      nom: formData.nom.trim(),
      pays: formData.pays.trim(),
      image: formData.image.trim(),
      description: formData.description.trim(),
      ingredients: formData.ingredients.split(",").map((i) => i.trim()),
      etapes: formData.etapes.split("\n").map((e) => e.trim())
    };

    try {
      await axios.put(`http://localhost:3001/recipes/${id}`, update);
      setShowPopup(false);
       toast.success("Recette mise à jour avec succès !");
      navigate("/recettes"); // go back to card list
    } catch (error) {
      console.error(error);
       toast.error("Erreur lors de la mise à jour !");
    }

    setLoading(false);
  };

  const handleCancel = () => setShowPopup(false);

  return (
    <div className="edit-rec-container">
      <h2>Modifier la recette</h2>

      <form onSubmit={handleSubmit}>
        <label>Nom :</label>
        <input
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />

        <label>Pays :</label>
        <input
          name="pays"
          value={formData.pays}
          onChange={handleChange}
          required
        />

        <label>Image URL :</label>
        <input
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

        <label>Ingrédients :</label>
        <textarea
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          required
        />

        <label>Étapes :</label>
        <textarea
          name="etapes"
          value={formData.etapes}
          onChange={handleChange}
          required
        />

        <button type="submit">{loading ? "Modification..." : "Modifier"}</button>
      </form>

      {showPopup && (
        <PopUp
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}




