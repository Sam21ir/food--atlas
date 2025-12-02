import React from "react";

export default function PopUp({ onConfirm, onCancel }) {
  return (
    <div className="popup-edit-overlay">
      <div className="popup-edit-box">
        <h3>Confirmer la modification</h3>
        <p>Voulez-vous vraiment mettre à jour cette recette ?</p>

        <div className="popup-edit-buttons">
          <button className="confirm-btn" onClick={onConfirm}>
            Confirmer
          </button>

          <button className="cancel-btn" onClick={onCancel}>
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}