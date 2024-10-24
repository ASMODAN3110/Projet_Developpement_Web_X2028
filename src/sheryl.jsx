import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './sheryl.css';
import Logo from './assets/Logo.png'; // Remplacez par le chemin de votre logo
import Employé from './assets/Employé.jpg'; // Remplacez par le chemin de votre image
import { Link } from 'react-router-dom';

const Sheryl = () => {
    const handleClick = (action) => {
        alert(`Action sélectionnée : ${action}`);
    };

    return (
        <div className="app">
            <header className="header">
                <img src={Logo} alt="Logo du restaurant" />
                <nav className="nav-links">
                    <a href="#">Accueil</a>
                    <a href="#">Commandes</a>
                    <a href="#">Réclamations</a>
                    <a href="#">Statistiques</a>
                </nav>
            </header>
            <div className="container ">
                <div className="left ">
                    <div className="overlay text-center">Que désirez-vous faire aujourd'hui ?</div>
                </div>
                <div className="right">
                <Link className= "btn btn-secondary" to="/menu">
                    <button className="button" onClick={() => handleClick('Gérer le menu du jour')}>
                        Gérer le menu du jour
                    </button></Link>
                    <Link className= "btn btn-secondary" to="/gestionmenu">Gérer les menu</Link>
                    <Link className= "btn btn-secondary" to="/reclamation">Reclamations</Link>
                    <Link className= "btn btn-secondary" to="/menu">Gérer le menu du jour</Link>
                </div>
            </div>
        </div>
    );
};

export default Sheryl;
