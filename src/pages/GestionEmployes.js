import React, { useState } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { MdEmail, MdPhone, MdLock, MdPerson } from 'react-icons/md';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const GestionEmployes = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [deleteNom, setDeleteNom] = useState('');
  const [deletePrenom, setDeletePrenom] = useState('');
  const [deletePoste, setDeletePoste] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique de soumission du formulaire
    console.log('Formulaire de création de compte soumis');
    navigate('/'); // Redirige vers la page principale après soumission
  };

  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique de soumission du formulaire de suppression
    console.log('Formulaire de suppression soumis');
    navigate('/'); // Redirige vers la page principale après soumission
  };

  return (
    <div>
      <Navbar />
      <div className="section">
        <h2 className="centered-title">Gestion des Employés</h2>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formNom" className="mb-4">
                <Form.Label>
                  <MdPerson className="label-icon" /> Nom
                </Form.Label>
                <Form.Control type="text" placeholder="Entrez votre nom" aria-label="Nom" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formPrenom" className="mb-4">
                <Form.Label>
                  <MdPerson className="label-icon" /> Prénom
                </Form.Label>
                <Form.Control type="text" placeholder="Entrez votre prénom" aria-label="Prénom" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formMail" className="mb-4">
                <Form.Label>
                  <MdEmail className="label-icon" /> Mail
                </Form.Label>
                <Form.Control type="email" placeholder="Entrez votre email" aria-label="Mail" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formTelephone" className="mb-4">
                <Form.Label>
                  <MdPhone className="label-icon" /> Téléphone
                </Form.Label>
                <Form.Control type="tel" placeholder="Entrez votre numéro de téléphone" aria-label="Téléphone" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formPoste" className="mb-4">
                <Form.Label>
                  <MdPerson className="label-icon" /> Poste
                </Form.Label>
                <Form.Control type="text" placeholder="Entrez votre poste" aria-label="Poste" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formMotDePasse" className="mb-4">
                <Form.Label>
                  <MdLock className="label-icon" /> Mot de passe
                </Form.Label>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Entrez votre mot de passe"
                  aria-label="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="link" onClick={togglePasswordVisibility}>
                  {showPassword ? 'Masquer' : 'Afficher'}
                </Button>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formConfirmerMotDePasse" className="mb-4">
                <Form.Label>
                  <MdLock className="label-icon" /> Confirmer Mot de passe
                </Form.Label>
                <Form.Control
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirmez votre mot de passe"
                  aria-label="Confirmer Mot de passe"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button variant="link" onClick={toggleConfirmPasswordVisibility}>
                  {showConfirmPassword ? 'Masquer' : 'Afficher'}
                </Button>
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit" className="submit-button mb-4">
            Créer Compte
          </Button>
          <Button variant="secondary" onClick={() => navigate('/')} className="submit-button mb-4">
            Retour
          </Button>
        </Form>

        <hr className="my-4" /> {/* Ligne de séparation */}

        <Form onSubmit={handleDeleteSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formDeleteNom" className="mb-4">
                <Form.Label>
                  <MdPerson className="label-icon" /> Nom
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrez le nom de l'employé"
                  aria-label="Nom"
                  value={deleteNom}
                  onChange={(e) => setDeleteNom(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formDeletePrenom" className="mb-4">
                <Form.Label>
                  <MdPerson className="label-icon" /> Prénom
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrez le prénom de l'employé"
                  aria-label="Prénom"
                  value={deletePrenom}
                  onChange={(e) => setDeletePrenom(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formDeletePoste" className="mb-4">
                <Form.Label>
                  <MdPerson className="label-icon" /> Poste
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrez le poste de l'employé"
                  aria-label="Poste"
                  value={deletePoste}
                  onChange={(e) => setDeletePoste(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="danger" type="submit" className="submit-button mb-4">
            Supprimer Employé
          </Button>
          <Button variant="secondary" onClick={() => navigate('/')} className="submit-button mb-4">
            Retour
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default GestionEmployes;
