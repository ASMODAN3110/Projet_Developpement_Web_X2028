import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Admin.css';
import yourImage from '../assets/admin0.jpg';
import GestionEmployes from './GestionEmployes';
import GestionPromotions from './GestionPromotions';
import GestionParametres from './GestionParametres';

const Admin = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminMainPage />} />
      <Route path="/gestion-employes" element={<GestionEmployes />} />
      <Route path="/gestion-promotions" element={<GestionPromotions />} />
      <Route path="/gestion-parametres" element={<GestionParametres />} />
    </Routes>
  );
};

const AdminMainPage = () => {
  return (
    <div className="main-page">
      <Navbar />
      <div className="content">
        <div className="image-container">
          <img
            src={yourImage}
            alt="Description de l'image"
            className="centered-image"
          />
        </div>
        <div className="button-container">
          <Link to="/admin/gestion-employes" className="custom-button">
            Gestion des employés
          </Link>
          <Link to="/admin/gestion-promotions" className="custom-button">
            Gestion des promotions
          </Link>
          <Link to="/admin/gestion-parametres" className="custom-button">
            Gestion des paramètres
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;