import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import './About.css';

function About() {
    return (
      <div>
        <Header />
        <div className="about">
            <h1>A Propos de Zeduc@Space</h1>
            
            <div className="text">
             <p>
                Bienvenue à ZeDuc@Space, le restaurant incontournable des étudiants de l'UCAC-ICAM à Yansoki !
                Situé au sommet de la résidence La Terrasse, notre espace offre bien plus qu'une expérience culinaire.
                Vous profiterez d’une ambiance conviviale et divertissante, avec une vue imprenable sur la Dibamba,
                tout en savourant nos plats délicieux. Que ce soit pour les matchs de Ligue des Champions diffusés sur
                notre écran géant ou une partie de billard entre amis, ZeDuc@Space est l'endroit parfait pour se détendre et se régaler.
             </p>
        </div>
      </div>
        <Footer />
      </div>
    );
  }
  
  export default About;