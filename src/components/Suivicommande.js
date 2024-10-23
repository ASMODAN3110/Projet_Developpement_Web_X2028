import React from 'react';
import './suivicommande.css'; // Assure-toi de créer ce fichier CSS
import roti from "../assets/roti.png";
import kok from "../assets/kok.png";

const SuiviCommande = () => {
    return (
        <div className="container">
            <header className="header">
                <div className="nav-container">
                    <img src="../assets/Screenshot (171) 2.png" alt="Logo" className="logo" />
                    <nav className="nav">
                        <button className="nav-button">Accueil</button>
                        <button className="nav-button">Commande</button>
                        <button className="nav-button">Réclamation</button>
                        <button className="nav-button">Dashboard</button>
                    </nav>
                </div>
                <hr className="divider" />
                <h2 className="header-title">Suivis des Commandes</h2>
            </header>
            <main className="main-content">
                <div className="box">
                    <img src={roti} alt="Plat 1" className="plate-image" />
                    <div className="info">
                        <p>Nom:Okok sucré + manioc</p>
                        <p>Stat: déja livré</p>
                    </div>
                </div>
                <div className="box">
                    <img src={kok} alt="Plat 2" className="plate-image" />
                    <div className="info">
                        <p>Nom:Poulet roti + riz</p>
                        <p>Stat: Prêt à être servi</p>
                    </div>
                </div>
            </main>
            <footer className="footer">
                {/* Pied de page vide */}
            </footer>
        </div>
    );
};

export default SuiviCommande;