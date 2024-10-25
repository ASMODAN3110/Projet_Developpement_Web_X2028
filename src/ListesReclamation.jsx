import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function ListesReclamation() {
  const [selectedRow, setSelectedRow] = useState(null);


  const handleRowClick = (index) => {
    setSelectedRow(index);
  };

  const handleRespondClick = () => {
    if (selectedRow !== null) {
      alert(`Répondre à la réclamation de ${selectedRow === 0 ? "Audrey" : "Shéryl"}`);
    }
  };


  const containerStyle = {
    background: "linear-gradient(180deg, #000 11%, #cfbd97 90%)",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  };

  const tableStyle = {
    backgroundColor: "#cfbd97",
    color: "black",
    width: "80%",
    marginBottom: "20px",
  };

  const tableHeadStyle = {
    backgroundColor: "black",
    color: "white",
  };

  const rowStyle = {
    cursor: "pointer",
  };

  const selectedRowStyle = {
    backgroundColor: "#d6d6d6",
  };

  const buttonStyle = {
    backgroundColor: "#e0e0e0",
    color: "black",
    marginTop: "20px",
    cursor: selectedRow !== null ? "pointer" : "not-allowed",
    opacity: selectedRow !== null ? 1 : 0.5,
  };

  const navigate = useNavigate();
  const handleExit = () => {
    navigate('/sheryl'); // Redirection vers la page "sheryl"
  };

  return (
    <div style={containerStyle}>
      <h1>Listes de Réclamations</h1>
      <div className="exit-icon position-absolute" style={{ top: '10px', right: '10px' }}>
            <FaTimes onClick={handleExit} style={{ cursor: 'pointer', fontSize: '24px', color: '#fff' }} />
            </div>
      <Table bordered hover style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeadStyle}>Noms</th>
            <th style={tableHeadStyle}>Message</th>
            <th style={tableHeadStyle}>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr
            style={selectedRow === 0 ? { ...rowStyle, ...selectedRowStyle } : rowStyle}
            onClick={() => handleRowClick(0)}
          >
            <td>Audrey</td>
            <td>Ma livraison n'a pas été prise en compte</td>
            <td>Hier</td>
          </tr>
          <tr
            style={selectedRow === 1 ? { ...rowStyle, ...selectedRowStyle } : rowStyle}
            onClick={() => handleRowClick(1)}
          >
            <td>Shéryl</td>
            <td>La quantité de nourriture n'est pas consistante</td>
            <td>Hier</td>
          </tr>
        </tbody>
      </Table>
      <Link className="btn btn-secondary w-90 text-black" style={{
                        backgroundColor : 'white', }} to="/ReclamationEm"
                        style={buttonStyle}
                        onClick={handleRespondClick}
                        disabled={selectedRow === null}>
                        Répondre
        </Link>
    </div>
  );
}

export default ListesReclamation;
