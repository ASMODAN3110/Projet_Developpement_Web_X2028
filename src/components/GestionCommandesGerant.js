import React, { useState } from 'react';
import './GestionCommandesGerant.css';

function GestionCommandesGerant() {
    const [activeTab, setActiveTab] = useState(null);

    const commandesEnCours = [
        {
            id: '001',
            client: 'XXXXXXXXXXX',
            dateCommande: '15-10-2024',
            statut: 'En préparation',
            articles: [{ nom: 'Poulet Roti', quantite: 2 }],
            adresse: 'Yansoki, Douala',
            suivi: '1234567890'
        },
    ];

    const commandesAnnulees = [
        {
            id: '003',
            client: 'YYYYYYYYYYY',
            dateAnnulation: '2024-10-16',
            raison: 'Annulation par le client',
            articles: [{ nom: 'Boulettes', quantite: 1 }]
        },
    ];

    const commandesEnRetard = [
        {
            id: '004',
            client: 'ZZZZZZZZ',
            dateCommande: '10-10-2024',
            datePrevue: '13-10-2024',
            statut: 'En attente de stock',
        },
    ];

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="container">
            <nav className="navbar">
                <img src={require('../../assets/Miam Miam.png')} alt="Company Logo" className="logo" />
                <div className="nav-links">
                    <a href="#" className="nav-item">Accueil</a>
                    <a href="#" className="nav-item">Commandes</a>
                    <a href="#" className="nav-item">Réclamation</a>
                    <a href="#" className="nav-item">Dashboard</a>
                </div>
            </nav>
            <div className="main-content">
                <h1 className="title">Gestion des commandes</h1>
                <div className="content-box">
                    <button className="btn" onClick={() => handleTabClick('enCours')}>
                        Suivre les commandes en cours
                    </button>
                    <button className="btn" onClick={() => handleTabClick('annuleesRetard')}>
                        Voir les commandes annulées ou en retard
                    </button>

                    {activeTab === 'enCours' && (
                        <div className="commandes-list">
                            <h2>Commandes en cours</h2>
                            {commandesEnCours.map((commande) => (
                                <div key={commande.id} className="commande-card">
                                    <p><strong>Numéro de commande :</strong> {commande.id}</p>
                                    <p><strong>Client :</strong> {commande.client}</p>
                                    <p><strong>Date de commande :</strong> {commande.dateCommande}</p>
                                    <p><strong>Statut :</strong> {commande.statut}</p>
                                    <p><strong>Articles :</strong> {commande.articles.map(article => `${article.nom} (x${article.quantite})`).join(', ')}</p>
                                    <p><strong>Adresse :</strong> {commande.adresse}</p>
                                    <p><strong>Suivi :</strong> {commande.suivi}</p>
                                    <button className="btn-action">Voir les détails</button>
                                    <button className="btn-action">Annuler la commande</button>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'annuleesRetard' && (
                        <div className="commandes-list">
                            <h2>Commandes annulées</h2>
                            {commandesAnnulees.map((commande) => (
                                <div key={commande.id} className="commande-card">
                                    <p><strong>Numéro de commande :</strong> {commande.id}</p>
                                    <p><strong>Client :</strong> {commande.client}</p>
                                    <p><strong>Date d’annulation :</strong> {commande.dateAnnulation}</p>
                                    <p><strong>Raison :</strong> {commande.raison}</p>
                                    <p><strong>Articles :</strong> {commande.articles.map(article => `${article.nom} (x${article.quantite})`).join(', ')}</p>
                                    <button className="btn-action">Voir les détails</button>
                                </div>
                            ))}

                            <h2>Commandes en retard</h2>
                            {commandesEnRetard.map((commande) => (
                                <div key={commande.id} className="commande-card">
                                    <p><strong>Numéro de commande :</strong> {commande.id}</p>
                                    <p><strong>Client :</strong> {commande.client}</p>
                                    <p><strong>Date de commande :</strong> {commande.dateCommande}</p>
                                    <p><strong>Date prévue :</strong> {commande.datePrevue}</p>
                                    <p><strong>Statut :</strong> {commande.statut}</p>
                                    <button className="btn-action">Voir les détails</button>
                                    <button className="btn-action">Envoyer un rappel</button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default GestionCommandesGerant;