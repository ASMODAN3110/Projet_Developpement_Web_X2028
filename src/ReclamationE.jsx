import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './assets/Logo.png';
import './ReclamationE.css';

const ReclamationE = () => {
  return (
    <div className="container d-flex flex-column align-items-center bg-cfbd97">
      {/* Première section : Titre et Sous-titre */}
      <div className="text-center ">
        <h1>Réclamations</h1>
        <p>Salut!Comment pouvons-nous vous aider ? </p>
      </div>

      {/* Deuxième section : Champs de texte */}
      <div className="row mb-4">
        <div className="col-md-6">
          <label>Nom</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label>Prenom</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-6 mt-3">
          <label>Numéro</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-6 mt-3">
          <label>Mail</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-12 mt-3">
          <label>Message</label>
          <input type="textarea" className="form-control" />
        </div>
      </div>

      {/* Troisième section : Bouton centré */}
      <div className="text-center ">
        <button className="btn btn-primary bg-black ">Soumettre</button>
      </div>
    </div>
  );
};

export default ReclamationE;
