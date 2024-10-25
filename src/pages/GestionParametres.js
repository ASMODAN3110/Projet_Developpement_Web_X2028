import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import InformationsRestaurant from '../components/InformationsRestaurant';
import Horaires from '../components/Horaires';
import Paiements from '../components/IntegrationsAPI';
import Politiques from '../components/PolitiquesApplication';

const GestionParametres = () => {
  const [selectedSection, setSelectedSection] = useState('informations');

  const handleSectionSelect = (section) => {
    setSelectedSection(section);
  };

  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <Sidebar onSelect={handleSectionSelect} />
        <div className="content">
          {selectedSection === 'informations' && <InformationsRestaurant />}
          {selectedSection === 'horaires' && <Horaires />}
          {selectedSection === 'paiements' && <Paiements />}
          {selectedSection === 'politiques' && <Politiques />}
          {/* Ajoutez d'autres composants pour les autres sections ici */}
        </div>
      </div>
    </div>
  );
};

export default GestionParametres;
