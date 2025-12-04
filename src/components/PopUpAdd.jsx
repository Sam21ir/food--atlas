import React from "react";
import "../PopUp.css";
export default function PopUpAdd({ onConfirm, onCancel }) {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h3>Are you sure you want to confirm this recipe?</h3>

        <div className="popup-buttons">
          <button className="confirm-btn" onClick={onConfirm}>
            Confirm
          </button>
          <button className="cancel-btn" onClick={onCancel}>
            Modify
          </button>
        </div>
      </div>
    </div>
  );
}