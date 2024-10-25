import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Contactez-nous</h4>
            <div className="links">
              <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Yansoki, Douala</p>
              <p><FontAwesomeIcon icon={faPhone} /> +237 652155978</p>
              <p><FontAwesomeIcon icon={faEnvelope} /> zeducspace@gmail.com</p>
            </div>
          </div>

          <div className="footer-col">
            <h4>Liens Utiles</h4>
            <div className="links">
              <p><a href="#">À propos</a></p>
              <p><a href="#">Termes et Conditions</a></p>
            </div>
          </div>

          <div className="footer-col">
            <h4>Nos Services</h4>
            <div className="links">
              <p><a href="#">Menu</a></p>
              <p><a href="#">Livraison</a></p>
              <p><a href="#">Réclamation</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
