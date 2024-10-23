import React from 'react';
import './suivicommande.css'; // Assure-toi de créer ce fichier CSS
import roti from "../assets/roti.png";
import kok from "../assets/kok.png";

const Commandeannule = () => {
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
            </header>
            <main className="main-content">
            <h1 className="header-title">Commandes Annulées ou en retard</h1>
                <div className="box">
                    <img src={roti} alt="Plat 3" className="plate-image" />
                    <div className="info">
                        <p>Nom:Okok sucré + manioc</p>
                        <p>Stat: Annulée</p>
                        <p>Cause: Client a changé d'avis</p>
                    </div>
                </div>
                <div className="box">
                    <img src={kok} alt="Plat 4" className="plate-image" />
                    <div className="info">
                        <p>Nom:Poulet roti + riz</p>
                        <p>Stat: Annulée</p>
                        <p>Cause: Problème de disponibilité</p>
                    </div>
                </div>
            </main>
            <footer className="footer">
                {/* Pied de page vide */}
            </footer>
        </div>
    );
};

export default Commandeannule;