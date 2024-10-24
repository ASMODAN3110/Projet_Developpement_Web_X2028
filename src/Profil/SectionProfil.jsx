import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';

const Profile = ({ user }) => {
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

        {/* Div droite avec les informations utilisateur */}
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formNom">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" value={user.nom} readOnly />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPrenom">
              <Form.Label>Prénom</Form.Label>
              <Form.Control type="text" value={user.prenom} readOnly />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={user.email} readOnly />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLocalisation">
              <Form.Label>Localisation</Form.Label>
              <Form.Control type="text" value={user.localisation} readOnly />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formParrainage">
              <Form.Label>Code de parrainage</Form.Label>
              <Form.Control type="text" value={user.codeParrainage} readOnly />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPointsFidelite">
              <Form.Label>Points de fidélité</Form.Label>
              <Form.Control type="number" value={user.pointsFidelite} readOnly />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

// Exemple d'utilisation avec des données utilisateur
const userInfo = {
  nom: 'Dupont',
  prenom: 'Jean',
  email: 'jean.dupont@example.com',
  localisation: 'Paris',
  codeParrainage: 'PAR123',
  pointsFidelite: 150,
};

export default function App() {
  return <Profile user={userInfo} />;
}
