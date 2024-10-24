import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import ndole from '../assets/ndole.jpeg';
import shrimps from '../assets/shrimps.jpg';
import Poulet from '../assets/Poulet.jpeg';
import porc from '../assets/porc.jpeg';

const SectionPanier = () => {
  // Product data with title, description, price (per unit), and image
  const initialProducts = [
    { id: 1, title: 'Ndolè + batton', unitPrice: 2000, quantity: 1, image: ndole },
    { id: 2, title: 'Crevettes grillées',  unitPrice: 3500, quantity: 1, image: shrimps },
    { id: 3, title: 'Poulet rôti', unitPrice: 4000, quantity: 1, image: Poulet },
    { id: 4, title: 'Porc braisé', unitPrice: 3000, quantity: 1, image: porc }
  ];

  const [products, setProducts] = useState(initialProducts);
  const [toggleState, setToggleState] = useState(false);

  const handleToggle = () => {
    setToggleState(!toggleState);
  };

  // Handle quantity change and update total price based on quantity
  const handleQuantityChange = (index, newQuantity) => {
    const updatedProducts = products.map((product, i) => {
      if (i === index) {
        return {
          ...product,
          quantity: newQuantity < 1 ? 1 : newQuantity // Ensure quantity is always at least 1
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  // Handle product removal
  const handleRemoveProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <Container 
      fluid 
      className="d-flex flex-column justify-content-start" 
      style={{ minHeight: '100vh', width: '100vw', padding: '20px', backgroundColor: 'black' }}
    >
      {/* Première div (titre et toggle button) */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 style={{ color: 'white' }}>Couvert et Sac</h2>
          <p style={{ color: 'white' }}>
            Aidez-nous à réduire les déchets : demandez des couverts que si vous en avez besoin.
          </p>
        </div>
        <Form.Check 
          type="switch" 
          id="custom-switch" 
          label={toggleState ? 'Activé' : 'Désactivé'} 
          onChange={handleToggle} 
          style={{ color: 'white' }}
        />
      </div>

      {/* Deuxième div (grille avec produits) */}
      <div className="flex-grow-1">
        {products.map((product, index) => (
          <Row key={product.id} className="align-items-center mb-3">
            {/* Col for Image */}
            <Col xs={2}>
              <img 
                src={product.image}  
                alt={product.title} 
                className="img-fluid" 
                style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
              />
            </Col>

            {/* Col for Title, Description, and Price */}
            <Col xs={6} className="d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-0" style={{ color: 'white' }}>{product.title}</h5>
              </div>
              <span className="fw-bold" style={{ color: 'white' }}>
                {/* Display total price = unit price * quantity */}
                {product.unitPrice * product.quantity} Francs
              </span>
            </Col>

            {/* Col for Quantity and Delete Button */}
            <Col xs={4} className="d-flex justify-content-end align-items-center">
              <Button 
                variant="danger" 
                className="me-3"
                onClick={() => handleRemoveProduct(product.id)} // Remove product on button click
              >
                <FontAwesomeIcon icon={faTrashAlt} /> 
              </Button>
              <Form.Label className="me-2 mb-0" style={{ color: 'white' }}>Quantité :</Form.Label>
              <Form.Control 
                type="number" 
                value={product.quantity} 
                onChange={(e) => handleQuantityChange(index, parseInt(e.target.value, 10))} 
                min={1} 
                style={{ width: '60px' }} 
              />
            </Col>
          </Row>
        ))}
      </div>

      {/* New buttons at the bottom */}
      <div className="d-flex justify-content-between mt-4">
        <Button variant="secondary" style={{ backgroundColor: '#6c757d', color: 'white' }}>Continuer achats</Button>
        <Button variant="success" style={{ backgroundColor: '#28a745', color: 'white' }}>Valider commande</Button>
      </div>
    </Container>
  );
};

export default SectionPanier;
