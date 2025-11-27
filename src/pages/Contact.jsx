import React, { useState } from "react";
import "../contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Nom requis.";
    if (!formData.email.trim()) newErrors.email = "Email requis.";
    if (!formData.message.trim()) newErrors.message = "Message requis.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {!success ? (
          <>
            <h1>Contactez-nous</h1>
            <p className="subtitle">
              Une question ? Une suggestion ? Envoyez-nous un message.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nom</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  className={errors.name ? "error" : ""}
                  onChange={handleChange}
                />
                {errors.name && <p className="error-message">{errors.name}</p>}
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  className={errors.email ? "error" : ""}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="error-message">{errors.email}</p>
                )}
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  className={errors.message ? "error" : ""}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <p className="error-message">{errors.message}</p>
                )}
              </div>

              <button type="submit" className="submit-btn">
                Envoyer le message
              </button>
            </form>
          </>
        ) : (
          <div className="success-message">
            <h2>Merci !</h2>
            <p>Votre message a été envoyé avec succès.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
