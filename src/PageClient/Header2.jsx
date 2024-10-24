import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.png";
const Header2 = () => {
  return (
    <header className="header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <img src={logo} alt="Logo" className="logo" style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
        }}  />
    <nav className="nav" style={{ display: 'flex', gap: '20px' }}>
      <a href="#accueil">Accueil</a>
      <a href="#menu">Menu</a>
      <a href="#actualites">Actualités</a>
      <a href="#statistiques">Statistiques</a>
    </nav>
    <div className="actions" style={{ display: 'flex', alignItems: 'center', marginright: 'auto' }}>
      <input type="search" placeholder="Rechercher" />
    </div>
    <div className="act" style={{ marginright: 'auto' }}>
      <a href="#"><FontAwesomeIcon icon={faCartShopping} /></a> 
    </div>
  </header>
  );
};
export default Header2;