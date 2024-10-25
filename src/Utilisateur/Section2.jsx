import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button, Card, Row, Col, Container } from 'react-bootstrap';
import photo from '../assets/photo.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import {NavLink} from 'react-router-dom';


const products = [
  { id: 1, title: 'Produit 1', price: '1000 franc', image: photo },
  { id: 2, title: 'Produit 2', price: '1000 franc', image: photo2 },
  { id: 3, title: 'Produit 3', price: '1000 franc', image: photo3 },
];

const Section2 = () => {
  return (
    <div style={{ backgroundColor: "#cfbd97",width:'100vw' }}>
      <Container style={{ backgroundColor: "#cfbd97" }}>
        <div className="d-flex ">
          {/* Première div à gauche */}
          <div className="flex-grow-1 my-5">
            <h3>Bienvenue sur notre site !</h3>
            <p>
              Découvrez nos produits exclusifs et profitez de nos offres spéciales.
            </p>
            <NavLink className='btn btn-secondary' style={{ backgroundColor: "#000000" }} variant="primary" to= "/apropos"> En savoir plus
            </NavLink>
            </div>

          {/* Deuxième div à droite avec une grille */}
          <div className="flex-grow-1 d-flex justify-content-end">
            < div className="row mb-5 justify-content-end">
              {products.map((product) => (
                <Col key={product.id} md={4}>
                  <Card className="mb-4  style={{ width: '500px' }}">
                    <Card.Img variant="top" src={product.image} alt={`Image de ${product.title}`} style={{ height : "200px" }}  />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>{product.price}</Card.Text>
                      <NavLink className='btn btn-secondary' style={{ backgroundColor: "#000000" }} variant="success" to="/panier">Commander</NavLink>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section2;
