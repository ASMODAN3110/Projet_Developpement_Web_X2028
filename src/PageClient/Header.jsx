import React from "react";
import './Page.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.png"


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Actualités</a></li>
          <li><a href="#">Statistiques</a></li>
          <li><a href="#"><FontAwesomeIcon icon={faCartShopping} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faSearch} /></a></li>
          
        </ul>
      </nav>
      <div className="auth-buttons">
        <button>SIGN IN</button>
        <button>LOGIN</button>
      </div>
    </header>
  );
};

export default Header;