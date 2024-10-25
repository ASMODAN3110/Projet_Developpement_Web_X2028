import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Documentation.css';

const Documentation = () => {
  const navigate = useNavigate();

  return (
    <div className="main-page">
      <Navbar />
      <div className="documentation-content">
        <div className="text-container">
          <div className="header-container">
            <button 
              onClick={() => navigate('/admin')} 
              className="return-button"
            >
              Retour
            </button>
            <h2 className="doc-title">Documentation</h2>
          </div>
          <p className="doc-paragraph">
            Vous avez des difficultés à utiliser nos interfaces administratives ou à les manipuler efficacement ? Ne vous inquiétez pas, ce document est fait pour ça.
          </p>
          <p className="doc-paragraph">
            <strong>Accueil :</strong> Située à l'extrémité gauche de l'en-tête, cette interface est la page de base de l'administrateur. C'est à partir de cette page que l'administrateur peut effectuer ses activités. Ici vous pouvez voir les accès rapides vers les fonctionnalités de l'administrateur, qui sont : Gestion des employés, Gestion des promotions et Gestion des paramètres.
          </p>
          <ul className="doc-list">
            <li><strong>Gestion des employés :</strong> Cliquer sur ce bouton vous redirigera vers la page de gestion des employés où vous pourrez entrer des informations afin de créer ou supprimer le compte d'un employé.</li>
            <li><strong>Gestion des promotions :</strong> Cliquer sur ce bouton vous redirigera vers la page de gestion des promotions où vous pourrez entrer des informations afin de pouvoir créer ou supprimer une promotion.</li>
            <li><strong>Gestion des paramètres :</strong> Cliquer sur ce bouton vous redirigera vers la page de gestion des paramètres.</li>
          </ul>
          <p className="doc-paragraph">
            <strong>Réclamations :</strong> Située juste après Accueil, cette interface est la page qui vous permettra de consulter les réclamations des clients et les réponses données par vos employés afin de répondre plus efficacement et plus rapidement aux attentes des clients.
          </p>
          <p className="doc-paragraph">
            <strong>Statistiques :</strong> Située juste après Réclamations, cette interface est la page qui vous permet de consulter les statistiques de votre restaurant en temps réel.
          </p>
          <p className="doc-paragraph">
            <strong>Documentation :</strong> Située à l'extrémité droite de l'en-tête, cette interface est une page qui vous explique le fonctionnement des différents boutons et interfaces du site.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Documentation;