/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { MdSave, MdArrowBack, MdDelete, MdAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom'; 

const Horaires = () => {
  const [jours, setJours] = useState([
    { jour: 'Lundi', ouvert: true, creneaux: [{ debut: '', fin: '' }] },
    { jour: 'Mardi', ouvert: true, creneaux: [{ debut: '', fin: '' }] },
    { jour: 'Mercredi', ouvert: true, creneaux: [{ debut: '', fin: '' }] },
    { jour: 'Jeudi', ouvert: true, creneaux: [{ debut: '', fin: '' }] },
    { jour: 'Vendredi', ouvert: true, creneaux: [{ debut: '', fin: '' }] },
    { jour: 'Samedi', ouvert: true, creneaux: [{ debut: '', fin: '' }] },
    { jour: 'Dimanche', ouvert: true, creneaux: [{ debut: '', fin: '' }] },
  ]);

  const navigate = useNavigate(); // Initialisez navigate

  const handleToggleJour = (index) => {
    const newJours = [...jours];
    newJours[index].ouvert = !newJours[index].ouvert;
    setJours(newJours);
  };

  const handleAddCreneau = (index) => {
    const newJours = [...jours];
    newJours[index].creneaux.push({ debut: '', fin: '' });
    setJours(newJours);
  };

  const handleDeleteCreneau = (jourIndex, creneauIndex) => {
    const newJours = [...jours];
    newJours[jourIndex].creneaux.splice(creneauIndex, 1);
    setJours(newJours);
  };

  const handleChangeCreneau = (jourIndex, creneauIndex, field, value) => {
    const newJours = [...jours];
    newJours[jourIndex].creneaux[creneauIndex][field] = value;
    setJours(newJours);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique de soumission du formulaire
    console.log('Formulaire des horaires soumis');
  };

  return (
    <div className="content">
      <h2 className="centered-title">Horaires</h2>
      <Form onSubmit={handleSubmit}>
        {jours.map((jour, jourIndex) => (
          <div key={jourIndex} className="mb-4">
            <h3>{jour.jour}</h3>
            <Form.Check
              type="switch"
              id={`switch-${jour.jour}`}
              label={`Ouvert le ${jour.jour}`}
              checked={jour.ouvert}
              onChange={() => handleToggleJour(jourIndex)}
            />
            {jour.ouvert && (
              <div>
                {jour.creneaux.map((creneau, creneauIndex) => (
                  <Row key={creneauIndex} className="mb-2">
                    <Col md={5}>
                      <Form.Control
                        type="time"
                        placeholder="Heure de début"
                        value={creneau.debut}
                        onChange={(e) => handleChangeCreneau(jourIndex, creneauIndex, 'debut', e.target.value)}
                      />
                    </Col>
                    <Col md={5}>
                      <Form.Control
                        type="time"
                        placeholder="Heure de fin"
                        value={creneau.fin}
                        onChange={(e) => handleChangeCreneau(jourIndex, creneauIndex, 'fin', e.target.value)}
                      />
                    </Col>
                    <Col md={2}>
                      <Button variant="danger" onClick={() => handleDeleteCreneau(jourIndex, creneauIndex)}>
                        <MdDelete />
                      </Button>
                    </Col>
                  </Row>
                ))}
                <Button variant="secondary" onClick={() => handleAddCreneau(jourIndex)}>
                  <MdAdd /> Ajouter un créneau
                </Button>
              </div>
            )}
          </div>
        ))}
        <Button variant="primary" type="submit" className="submit-button mb-4">
          <MdSave className="mr-2" /> Enregistrer
        </Button>
        <Button variant="secondary" onClick={() => navigate('/')} className="submit-button mb-4">
          <MdArrowBack className="mr-2" /> Retour
        </Button>
      </Form>
    </div>
  );
};

export default Horaires;