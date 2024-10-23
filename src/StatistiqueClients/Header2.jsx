import React from "react";
import '../Menu/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.png";


const Header2 = () => {
  return (
    <header className="header">
    <img src="../assets/logo.png" alt="Logo" className="logo" />
    <nav className="nav">
      <a href="#accueil">Accueil</a>
      <a href="#menu">Menu</a>
      <a href="#actualites">Actualités</a>
      <a href="#statistiques">Statistiques</a>
    </nav>
    <div className="actions">
      <input type="search" placeholder="Rechercher" />
    </div>
    <div className="act">
      <a href="#"><FontAwesomeIcon icon={faCartShopping} /></a> 
    </div>
  </header>
  );
};

export default Header2;
