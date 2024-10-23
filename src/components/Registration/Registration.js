import React, { useState } from 'react';
import './Registration.css';
import {Link} from "react-router-dom";

function Registration() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="container-fluid">
                <div className="navbar d-flex justify-content-between align-items-center">
                    {/* Je vais ajouter mon propre logo ici */}
                    <img alt="Zeduc@Space Logo" className="h-16" height="100"
                         src={require('../../assets/Miam Miam.png')} width="100"/>
                    <div>
                        <a href="#">Accueil</a>
                        <a href="#">Menu</a>
                        <a href="#">Actualités</a>
                        <a href="#">Statistiques</a>
                    </div>
                </div>

                <div className="flex justify-center items-center h-screen">
                    <div className="form-container w-96">
                        <h1 className="text-center text-2xl mb-4">Prêt à s’inscrire à Zeduc@Space ?</h1>
                        <h2 className="text-center text-lg mb-4">Entrez vos données</h2>

                        <input type="text" placeholder="Nom"/>
                        <input type="email" placeholder="Adresse email"/>
                        <input type="tel" placeholder="Numéro de téléphone"/>
                        <input type="text" placeholder="Localisation"/>

                        <div className="password-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Mot de passe"
                            />
                            <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                               onClick={togglePasswordVisibility}></i>
                        </div>

                        <div className="password-container">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirmez votre mot de passe"
                            />
                            <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                               onClick={toggleConfirmPasswordVisibility}></i>
                        </div>

                        <button>S’inscrire</button>

                        <p className="text-center mt-4">
                            Vous avez déjà un compte ?
                            <Link to="/" className="text-black font-bold"> Connectez-vous à votre compte
                                !</Link>
                        </p>
                    </div>
                </div>
            </div>
    );
}

export default Registration;