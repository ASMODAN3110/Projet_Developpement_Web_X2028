import React from "react";
import './Page.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom"; // Import useNavigate for programmatic navigation

const Header = () => {
 

  return (
    <header className="header">k
      <div className="logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><NavLink ClassName=" " to="/">Accueil</NavLink></li>
          <li><NavLink ClassName=" " to="/menu">Menu</NavLink></li> 
          <li><NavLink ClassName=" " to="/actualite">Actualités</NavLink></li>
          <li><NavLink ClassName=" " to="/statistiqueclients">Statistiques</NavLink></li> 
          <li><NavLink ClassName=" " to="/panier"><FontAwesomeIcon icon={faCartShopping} /></NavLink></li> 
          <li><NavLink ClassName=" " to="/apropos"><FontAwesomeIcon icon={faSearch} /></NavLink></li>
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
