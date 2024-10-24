import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table } from 'react-bootstrap';

const SectionReclamation2 = () => {
  return (
    <Container className="my-5">
      {/* Div contenant le titre */}
      <div className="text-center mb-4">
        <h2>Historiques des commandes</h2>
      </div>

      {/* Tableau avec 4 colonnes */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID-Commande</th>
            <th>Description</th>
            <th>Date</th>
            <th>Montant-Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Jean Dupont</td>
            <td>22/10/2024</td>
            <td>En cours</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Marie Durand</td>
            <td>21/10/2024</td>
            <td>Résolu</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Paul Martin</td>
            <td>20/10/2024</td>
            <td>En attente</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Anne Leroy</td>
            <td>19/10/2024</td>
            <td>En cours</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default SectionReclamation2;
