import React, { useState } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const InformationsRestaurant = () => {
  const [nomRestaurant, setNomRestaurant] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique de soumission du formulaire
    console.log('Formulaire de modification des informations du restaurant soumis');
    navigate('/gestion-parametres'); // Redirige vers la page principale après soumission
  };

  return (
    <div className="content">
      <h2 className="centered-title">Informations Restaurant</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formNomRestaurant" className="mb-4">
              <Form.Label>Nom du Restaurant</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez le nom du restaurant"
                aria-label="Nom du Restaurant"
                value={nomRestaurant}
                onChange={(e) => setNomRestaurant(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formTelephone" className="mb-4">
              <Form.Label>Téléphone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Entrez le numéro de téléphone"
                aria-label="Téléphone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formEmail" className="mb-4">
              <Form.Label>Adresse Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Entrez l'adresse email"
                aria-label="Adresse Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit" className="submit-button mb-4">
          Enregistrer
        </Button>
        <Button variant="secondary" onClick={() => navigate('/')} className="submit-button mb-4">
          Retour
        </Button>
      </Form>
    </div>
  );
};

export default InformationsRestaurant;
