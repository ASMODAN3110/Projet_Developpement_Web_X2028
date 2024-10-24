import React from "react";
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div class="footer-col">
            <h4>Contactez nous</h4>
           
              <p><FontAwesomeIcon icon={faMapMarkerAlt} />Yansoki, Douala</p>
              <p><FontAwesomeIcon icon={faPhone} />+237 652155978</p>
              <p> <FontAwesomeIcon icon={faEnvelope} />zeducspace@gmail.com</p>
            
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Liens Utiles</h4>
            
              <p><a href="#">À propos</a></p>
              <p><a href="#">Termes et Conditions</a></p>
            
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Nos Services</h4>
            
              <p><a href="#">Menu</a></p>
              <p><a href="#">Livraison</a></p>
              <p><a href="#">Reclamation</a></p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;