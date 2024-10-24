import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Utilise ceci pour la navigation
import './ReclamationEm.css';  
import Logo from './assets/Logo.png';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa'; // Import de l'icône de fermeture (cancel) de react-icons

const ReclamationEm = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Hook pour la navigation

  // Fonction de gestion de la soumission du message
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Message soumis:', message);
    // Logique pour soumettre le message ici
  };

  // Fonction pour gérer la fermeture (redirection vers une autre page)
  const handleExit = () => {
    navigate('/sheryl'); // Redirection vers la page "Sheryl"
  };

  return (
    <div className='body'>
        <div className="message-container d-flex justify-content-center align-items-center vh-100">
        <div className="form-box position-relative" style={{ padding: '20px', borderRadius: '10px', width: '400px' }}>
            {/* Icône de sortie en haut à droite */}
            <div className="exit-icon position-absolute" style={{ top: '10px', right: '10px' }}>
            <FaTimes onClick={handleExit} style={{ cursor: 'pointer', fontSize: '24px', color: '#fff' }} />
            </div>
            
            {/* Logo en haut du formulaire */}
            <div className="text-center mb-4">
            <img src={Logo} alt="Logo" style={{ width: '100px' }} /> {/* Remplace 'logo.png' par ton propre logo */}
            </div>

            {/* Formulaire pour soumettre le message */}
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="messageForm">
                <Form.Label style={{ color: '#fff' }}>Message</Form.Label>
                <Form.Control 
                as="textarea" 
                rows={3} 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Ecrivez un message ici..." // Placeholder modifié
                style={{ 
                    backgroundColor: '#cfbd97', // Fond couleur cfbd97
                    borderColor: '#000',        // Bordures noires
                    color: '#000'               // Couleur du texte
                }}
                />
            </Form.Group>
            <Button type="submit" variant="dark" className="mt-3 w-100">
                Soumettre
            </Button>
            </Form>
        </div>
        </div>
    </div>
    );
    }

    export default ReclamationEm;
