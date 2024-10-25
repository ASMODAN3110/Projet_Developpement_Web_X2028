import React, { useState } from 'react';
import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import { MdLocalOffer, MdCardGiftcard, MdApps, MdDateRange } from 'react-icons/md';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const GestionPromotions = () => {
  const initialFormState = {
    nomPromotion: '',
    offreSpeciale: '',
    application: '',
    date: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ajoutez ici la logique de soumission du formulaire
      console.log('Formulaire soumis:', formData);
      navigate('/');
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
      <Navbar />
      <Container className="py-4">
        <h2 className="text-center mb-4">Gestion des Promotions</h2>
        <Form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formNomPromotion">
                <Form.Label>
                  <MdLocalOffer className="me-2" /> Nom de la promotion
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrez le nom de la promotion"
                  name="nomPromotion"
                  value={formData.nomPromotion}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formOffreSpeciale">
                <Form.Label>
                  <MdCardGiftcard className="me-2" /> Offre spéciale assignée
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrez l'offre spéciale"
                  name="offreSpeciale"
                  value={formData.offreSpeciale}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formApplication">
                <Form.Label>
                  <MdApps className="me-2" /> Application
                </Form.Label>
                <Form.Select
                  name="application"
                  value={formData.application}
                  onChange={handleChange}
                  required
                >
                  <option value="">Sélectionnez une application</option>
                  <option value="Nourritures">Application 1</option>
                  <option value="Boissons">Application 2</option>
                  <option value="Nourritures et Boissons">Application 3</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formDate">
                <Form.Label>
                  <MdDateRange className="me-2" /> Date
                </Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="d-flex gap-2 justify-content-center">
            <Button variant="primary" type="submit">
              Valider
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

export default GestionPromotions;