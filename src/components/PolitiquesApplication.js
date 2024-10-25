import React, { useState } from 'react';
import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PolitiquesApplication = () => {
  const initialFormState = {
    // Éditeur de texte
    conditionsUtilisation: '', 
    politiqueConfidentialite: '',

    // Options de notification
    notificationsConditions: false,
    notificationsConfidentialite: false,
  };

  const [formData, setFormData] = useState(initialFormState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData(prevState => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ajoutez ici la logique de soumission du formulaire
      console.log('Formulaire soumis:', formData);
      navigate('/gestion-parametres');
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      // Gérer l'erreur (par exemple, afficher un message à l'utilisateur)
    }
  };

  const handleReset = () => {
    setFormData(initialFormState);
  };

  return (
    <>
      <Container className="py-4">
        <h2 className="text-center mb-4">Gestion des Politiques de l'Application</h2>
        <Form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
          <h3>Éditeur de Texte</h3>
          <Row className="mb-3">
            <Col md={12}>
              <Form.Group className="mb-3" controlId="formConditionsUtilisation">
                <Form.Label>Conditions d'Utilisation</Form.Label>
                <Form.Control
                  as="textarea" 
                  rows={4}
                  placeholder="Entrez les conditions d'utilisation"
                  name="conditionsUtilisation"
                  value={formData.conditionsUtilisation}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3" controlId="formPolitiqueConfidentialite">
                <Form.Label>Politique de Confidentialité</Form.Label>
                <Form.Control
                  as="textarea" 
                  rows={4}
                  placeholder="Entrez la politique de confidentialité"
                  name="politiqueConfidentialite"
                  value={formData.politiqueConfidentialite}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <h3>Options de Notification</h3>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Check
                type="switch"
                id="notificationsConditions"
                label="Notifications Conditions d'Utilisation"
                name="notificationsConditions"
                checked={formData.notificationsConditions}
                onChange={handleChange}
              />
            </Col>
            <Col md={6}>
              <Form.Check
                type="switch"
                id="notificationsConfidentialite"
                label="Notifications Politique de Confidentialité"
                name="notificationsConfidentialite"
                checked={formData.notificationsConfidentialite}
                onChange={handleChange}
              />
            </Col>
          </Row>
          
          <div className="d-flex gap-2 justify-content-center">
            <Button variant="primary" type="submit">
              Enregistrer
            </Button>
            <Button variant="secondary" type="button" onClick={handleReset}>
              Annuler
            </Button>
            <Button variant="outline-secondary" type="button" onClick={() => navigate('/')}>
              Retour
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default PolitiquesApplication;