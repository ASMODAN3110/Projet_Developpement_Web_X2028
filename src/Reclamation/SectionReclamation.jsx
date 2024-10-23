import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const SectionReclamation = () => {
  return (
    <Container className="my-5">
      {/* Div contenant le titre */}
      <div className="text-center mb-4">
        <h2>Profil</h2>
      </div>

      {/* Div principale contenant deux sections */}
      <Row>
        {/* Div gauche avec une image centrée */}
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <img 
            src="https://via.placeholder.com/300" 
            alt="Placeholder" 
            className="img-fluid"
            style={{ width: '300px', height: '300px' }}
          />
        </Col>

        {/* Div droite avec un formulaire */}
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formNom">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre nom" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPrenom">
              <Form.Label>Prénom</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre prénom" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Entrez votre email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLocalisation">
              <Form.Label>Localisation</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre localisation" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formParrainage">
              <Form.Label>Code de parrainage</Form.Label>
              <Form.Control type="text" placeholder="Entrez le code de parrainage" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPointsFidelite">
              <Form.Label>Points de fidélité</Form.Label>
              <Form.Control type="number" placeholder="Entrez vos points de fidélité" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Envoyer
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionReclamation;
