import React, { useState } from 'react';
import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PaymentInformation = () => {
  const initialFormState = {
    mobileMoney: {
      momo: '',
      mtn: '',
    },
    bankCard: {
      cardHolder: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    },
  };

  const [formData, setFormData] = useState(initialFormState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name.split('.')[0]]: {
        ...prevState[name.split('.')[0]],
        [name.split('.')[1]]: value,
      },
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
        <h2 className="text-center mb-4">Informations de Paiement</h2>
        <Form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
          <h3>Mobile Money</h3>
          <Row className="mb-2">
            <Col md={6}>
              <Form.Group className="mb-3" controlId="mobileMoney.momo">
                <Form.Label>Numéro Mobile Money (MoMo)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrez votre numéro MoMo"
                  name="mobileMoney.momo"
                  value={formData.mobileMoney.momo}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="mobileMoney.mtn">
                <Form.Label>Numéro Mobile Money (MTN)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrez votre numéro MTN Money"
                  name="mobileMoney.mtn"
                  value={formData.mobileMoney.mtn}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>
            </Col>
          </Row>

          <h3>Carte Bancaire</h3>
          <Row className="mb-2">
            <Col md={6}>
              <Form.Group className="mb-3" controlId="bankCard.cardHolder">
                <Form.Label>Nom du Titulaire de la Carte</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nom du Titulaire"
                  name="bankCard.cardHolder"
                  value={formData.bankCard.cardHolder}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="bankCard.cardNumber">
                <Form.Label>Numéro de Carte</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Numéro de Carte"
                  name="bankCard.cardNumber"
                  value={formData.bankCard.cardNumber}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col md={6}>
              <Form.Group className="mb-3" controlId="bankCard.expiryDate">
                <Form.Label>Date d'Expiration</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="MM/AA"
                  name="bankCard.expiryDate"
                  value={formData.bankCard.expiryDate}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="bankCard.cvv">
                <Form.Label>CVV</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="CVV"
                  name="bankCard.cvv"
                  value={formData.bankCard.cvv}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>
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

export default PaymentInformation;