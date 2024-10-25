import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <BootstrapNavbar expand="lg" style={{ backgroundColor: '#000000', color: '#cfbd97' }}>
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/admin">
          <img
            src={logo}
            width="65"
            height="65"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/admin" className="custom-nav-link" style={{ color: '#cfbd97' }}>
              Accueil
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/reclamation" className="custom-nav-link" style={{ color: '#cfbd97' }}>
              Réclamation
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/statistiques" className="custom-nav-link" style={{ color: '#cfbd97' }}>
              Statistiques
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/documentation" className="custom-nav-link" style={{ color: '#cfbd97' }}>
              Documentations
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;