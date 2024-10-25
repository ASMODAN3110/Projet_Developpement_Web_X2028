import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import bg from '../assets/bg.png';
import {NavLink} from 'react-router-dom';


const products = [
    { title: 'Pomotion', description: 'Commandez 3 plats de 1000fcfa aujhourd’hui et recevez une boisson gratuite.' },
    { title: 'Parrainage', description: 'Partagez votre code de parparrainage et recevez des points de fidélité .' },
    { title: 'Evenements', description: 'Venez regarder le match du Real VS Barca ce samedi .' },
  ];
  
const Section = () => {
  return (
    <div className= "py-4" style={{ backgroundImage: `url(${bg})` ,height : "400px" }} >
        <Container className=""  >
        <div>
            {/* Grille avec une ligne et 3 colonnes */}
            <Row>
            {products.map((product, index) => (
  <Col key={index}>
    <div className="mb-2 text-center">
      <h5 style={{ color: 'white' }}>{product.title}</h5> {/* Titre dynamique */}
    </div>
    <Card className="mb-4 mt-5 text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: '300px' }}>
      <Card.Body  className="d-flex flex-column justify-content-between">
        <Card.Text style={{ color: 'white' }}>
          {product.description} {/* Description dynamique */}
        </Card.Text>
        <div className="d-flex justify-content-center mt-auto">
          <NavLink className='btn btn-secondary' style={{ backgroundColor: '#000000' }} variant="primary" to="Actualite">
            Voir plus
          </NavLink>
        </div>
      </Card.Body>
    </Card>
  </Col>
))}

            </Row>
        </div>
        </Container>
    </div>
  );
};

export default Section;
