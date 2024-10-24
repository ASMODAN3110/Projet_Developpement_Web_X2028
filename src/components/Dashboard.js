import React from 'react';
import './Dashboard.css'; // Assure-toi de créer ce fichier CSS

const Dashboard = () => {
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
                <h2 className="header-title">Statistique</h2>
            </header>
            <main className="main-content">
                <div className="date-selection">
                    <label htmlFor="date">Choisir une date:</label>
                    <input type="date" id="date" />
                </div>

                <div className="tables-container">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>No. total des Commande</th>
                                <th>No. de client</th>
                                <th>Revenue</th>
                                <th>Plat le plus vendu</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>45</td>
                                <td>24</td>
                                <td>120,000frs</td>
                                <td>Le Eru</td>
                            </tr>
             
                        </tbody>
                    </table>
                    <hr className="divider" />
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>La boisson la plus vendu</th>
                                <th>Couts des ingredients</th>
                                <th>Pourcentage benefice(%)</th>
                                <th>Evenement</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Coka</td>
                                <td>50,000frs</td>
                                <td>41,67%</td>
                                <td>Aucun</td>
                            </tr>
    
                        </tbody>
                    </table>
                </div>
            </main>
            <footer className="footer">
                {/* Pied de page vide */}
            </footer>
        </div>
    );
};

export default Dashboard;