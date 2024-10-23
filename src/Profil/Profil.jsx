import React from 'react';
import './profil.css';
import Header from "../StatistiqueClients/Header2.jsx";
import Footer from '../Menu/Footer.jsx';



const ProfilePage = () => {
  const userData = {
    nom: 'Dupont',
    prenom: 'Jean',
    email: 'jean.dupont@example.com',
    localisation: 'Paris',
    codeParrainage: 'XYZ123',
    pointsFidelite: '150',
  };

  return (
    <div className="container">
        <Header/>
      <h1 className="title">Profil</h1>
      <section className="profile-section">
        <div className="profile-field">
          <label className="label">Nom :</label>
          <div className="text-display">{userData.nom}</div>
        </div>
        <div className="profile-field">
          <label className="label">Prénom :</label>
          <div className="text-display">{userData.prenom}</div>
        </div>
        <div className="profile-field">
          <label className="label">Mail :</label>
          <div className="text-display">{userData.email}</div>
        </div>
        <div className="profile-field">
          <label className="label">Localisation :</label>
          <div className="text-display">{userData.localisation}</div>
        </div>
        <div className="profile-field">
          <label className="label">Code de parrainage :</label>
          <div className="text-display">{userData.codeParrainage}</div>
        </div>
        <div className="profile-field">
          <label className="label">Points de fidélité :</label>
          <div className="text-display">{userData.pointsFidelite}</div>
        </div>
      </section>
      <hr></hr>
      <section className="order-history-section">
        <h2 className="section-title">Historique des commandes</h2>
        <table className="order-history-table">
          <thead>
            <tr>
              <th>ID Commande</th>
              <th>Description</th>
              <th>Date</th>
              <th>Montant total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CDMB782988</td>
              <td>Kaki - plantain mur</td>
              <td>12/02/24</td>
              <td>20000cfcfa</td>
            </tr>
          </tbody>
        </table>
      </section>
      <Footer/>
    </div>
  );
};

export default ProfilePage;