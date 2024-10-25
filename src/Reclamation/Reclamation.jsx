import React, { useState } from 'react';
import './Reclamation.css'; // Importation du fichier CSS pour la mise en page
//import Footer from '../PageClient/Footer';
import Header2 from '../PageClient/Header2';

const Reclamation = () => {
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    numero: '',
    mail: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis :', form);
    
  };

  return (
    <div className="reclamation-page">
      <Header2 />
      <div className="reclamation-container">
        <h1>Réclamation</h1>
        <div className='Greetings'> <p>Salut! Comment pouvons-nous vous aider?</p> </div>
        <form className="reclamation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="nom"
              placeholder="Nom (ex: Dupont)"
              value={form.nom}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="prenom"
              placeholder="Prénom (ex: Jean)"
              value={form.prenom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel" // Change to 'tel' for telephone input
              name="numero"
              placeholder="Numéro (ex: 652123456)"
              value={form.numero}
              onChange={handleChange}
              required
              pattern="[0-9]*" // Optional: Restricts to numbers only
            />
            <input
              type="email"
              name="mail"
              placeholder="Mail (ex: example@mail.com)"
              value={form.mail}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Message (ex: J'ai un problème avec ma commande)"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Soumettre</button>
        </form>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Reclamation;
