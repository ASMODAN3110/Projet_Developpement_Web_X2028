import React from 'react';
import { Carousel, Container, Row, Col,Button } from 'react-bootstrap';
import Okok from '../assets/Okok.jpeg'
import pudding from '../assets/pudding.jpeg'
import panne from '../assets/panne.jpeg'
import shrimps from '../assets/shrimps.jpg'

const HeroSection = () => {
  return (
    <div style={{ backgroundColor: "#cfbd97" }}>
      {/* Première section héroïque */}
      <div
        className="hero-section-1"
        style={{
          backgroundImage: `url(${pudding})`,
          backgroundSize: 'cover',
          height: '400px',
          color: 'black',
          border: '1px solid black',
        }}
      >
        <Container className="h-100 ">
          <Row className="h-100 justify-content-center align-items-center">
            <Col lg={8} className="text-center">
              <h2 style={{ color: 'black' }}>THE CLIMATE OF TASTE G CHILL</h2>
              <h1 style={{ color: 'black' }}>Bienvenue au Zeduc-Space</h1>

              {/* Carrousel d'images */}
              <Carousel>
                <Carousel.Item>
                  <img
                    src= {Okok}
                    className="d-block w-100"
                    alt="Image 1"
                    style={{ width: '100px', height: '300px', objectFit: 'cover' }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src= {panne}
                    className="d-block w-100"
                    alt="Image 2"
                    style={{ width: '200px', height: '300px', objectFit: 'cover' }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src= {shrimps}
                    className="d-block w-100"
                    alt="Image 3"
                    style={{ width: '200px', height: '300px', objectFit: 'cover' }}
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Deuxième section héroïque */}
      <Container fluid className="hero-section-2 py-5">
        <Row>
          <Col lg={6} className="d-flex justify-content-center align-items-center">
            <div className="circle-container">
              <div className="circle" style={styles.circle}>
                <Carousel style={styles.carousel}>
                  <Carousel.Item>
                    <img
                      src= {Okok}
                      className="d-block w-100"
                      alt="Circle Image 1"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={Okok}
                      className="d-block w-100"
                      alt="Circle Image 2"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={Okok}
                      className="d-block w-100"
                      alt="Circle Image 3"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </Col>

          <Col lg={6} className="d-flex justify-content-center align-items-center">
            <div>
              <h2 className="text-center" style={{ color: 'black', padding: '10px' }}>
                A PROPOS DE ZEDUC SPACE
              </h2>
              <p className="text-center" style={{ color: 'black', padding: '10px' }}>
                Zeduc space est un restaurant situé à Yansoki, au sommet de la cité La Terrasse, avec des mets délicieux.
              </p>
              <Button style={{ backgroundColor: "#000000",alignItems:"center" }} variant="primary">En savoir plus</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const styles = {
  circle: {
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    border: '5px solid black',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  carousel: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
  },
};

export default HeroSection;
