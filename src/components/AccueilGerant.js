import React from 'react';
import './AccueilGerant.css';
// import Screenshot from "../assets/Screenshot (171) 2.png";

const AccueilGerant = () => {
    return (
        <div className="container-fluid">
            {/* <img src={Screenshot} alt="Logo" width="80" height="80" /> */}
            <div className="navbar d-flex justify-content-between align-items-center">
                <a href="#">Accueil</a>
                <a href="#">Réclamations</a>
                <a href="#">Statistiques</a>
                <a href="#">Documentation</a>
            </div>
            <div className="content">
                <div className="left-section"></div>
                <div className="right-section">
                    <h1>Bienvenue!</h1>
                    <p>Que voulez-vous faire?</p>
                    <div className="button">Gestion des Commandes</div>
                    <div className="button">Gestion des Comptes</div>
                    <div className="button">Gestion des Statistiques</div>
                </div>
            </div>
        </div>
    );
};

export default AccueilGerant;