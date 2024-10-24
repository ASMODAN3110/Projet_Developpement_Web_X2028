import React from 'react';
import './GestionCompteEmployeGerant.css';

function GestionCompteEmployeGerant() {
    return (
        <div className="container">
            <nav className="navbar">
                <img src={require('../../assets/Miam Miam.png')} alt="Company Logo" className="logo" />
                <div className="nav-links">
                    <a href="#" className="nav-item">Accueil</a>
                    <a href="#" className="nav-item">Menu</a>
                    <a href="#" className="nav-item">Promotions</a>
                    <a href="#" className="nav-item">Parrainage</a>
                    <a href="#" className="nav-item">Employés</a>
                    <a href="#" className="nav-item">Réclamation</a>
                </div>
            </nav>

            <div className="text-center text-white mt-8">
                <h1 className="text-3xl">Gestion des Employés</h1>
            </div>

            <div className="mt-8 max-w-md mx-auto">
                <h2 className="text-white text-xl mb-4">Données des employés</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-white">Nom</label>
                        <input className="input-field" type="text" placeholder="" />
                    </div>
                    <div>
                        <label className="text-white">Prénom</label>
                        <input className="input-field" type="text" placeholder="" />
                    </div>
                    <div>
                        <label className="text-white">Mail</label>
                        <input className="input-field" type="email" placeholder="" />
                    </div>
                    <div>
                        <label className="text-white">Téléphone</label>
                        <input className="input-field" type="text" placeholder="" />
                    </div>
                    <div className="col-span-2">
                        <label className="text-white">Poste</label>
                        <input className="input-field" type="text" placeholder="" />
                    </div>
                    <div className="col-span-2 password-field">
                        <label className="text-white">Mot de passe</label>
                        <div className="relative w-full">
                            <input className="input-field" type="password" placeholder="" />
                            <i className="fas fa-eye absolute right-3 top-3"></i>
                        </div>
                    </div>
                    <div className="col-span-2 password-field">
                        <label className="text-white">Confirmer votre mot de passe</label>
                        <div className="relative w-full">
                            <input className="input-field" type="password" placeholder="" />
                            <i className="fas fa-eye absolute right-3 top-3"></i>
                        </div>
                    </div>
                    <div className="col-span-2 text-center">
                        <button className="button">Créer Compte</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GestionCompteEmployeGerant;