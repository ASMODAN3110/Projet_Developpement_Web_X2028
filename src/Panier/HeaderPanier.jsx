import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeaderPanier = () => {
  return (
    <Container fluid className="my-3">
      <Row className="align-items-center">
        {/* Titre à l'extrême gauche */}
        <Col md={6} className="text-start">
          <h2>Mon Panier</h2>
        </Col>

        {/* Boutons à l'extrême droite */}
        <Col md={6} className="text-end">
          <div className="d-flex justify-content-end">
            <Button variant="secondary" className="me-2">Sur place</Button>
            <Button variant="primary">A emporter</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderPanier;
