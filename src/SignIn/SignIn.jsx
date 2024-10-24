import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="signup-page">
      <nav className="navbar">
        <div className="logo">Zeduc@Space</div>
        <ul className="nav-links">
          <li>Accueil</li>
          <li>Menu</li>
          <li>Actualités</li>
          <li>Statistiques</li>
        </ul>
      </nav>

      <div className="signup-container">
        <h2>Prêt à s'inscrire à Zeduc@Space ?</h2>
        <div className="signup-form">
          <h3>Entrez vos données</h3>
          <form>
            <input type="text" placeholder="Nom" required />
            <input type="email" placeholder="Adresse email" required />
            <input type="tel" placeholder="Numéro de téléphone" required />
            <input type="text" placeholder="Localisation" required />

            <div className="password-field">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Mot de passe"
                required
              />
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                onClick={togglePasswordVisibility}
                className="toggle-password"
              />
            </div>

            <div className="password-field">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirmez votre mot de passe"
                required
              />
              <FontAwesomeIcon
                icon={showConfirmPassword ? faEye : faEyeSlash}
                onClick={toggleConfirmPasswordVisibility}
                className="toggle-password"
              />
            </div>

            <button type="submit" className="signup-btn">S'inscrire</button>
          </form>
          <p className="login-link">
            Vous avez déjà un compte ? <a href="#">Connectez-vous à votre compte</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
