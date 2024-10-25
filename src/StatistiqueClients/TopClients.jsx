import { useState } from 'react';
import './TopClients.css';
import Footer from '../PageClient/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import Header2 from '../PageClient/Header2';


const TopClients = () => {
  const [filter, setFilter] = useState('Mois');

  return (
    
    <div className="container-fluid">
      <Header2/>

      <main className="main">
        <h1>Top 10 Meilleurs Clients</h1>
        <div className="filter">
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="Jour">Jour</option>
            <option value="Semaine">Semaine</option>
            <option value="Mois">Mois</option>
          </select>
        </div>

        <table className="top-clients-table">
          <thead>
            <tr>
              <th>Classement</th>
              <th>Nom de l'étudiant</th>
              <th># de commandes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Ken</td>
              <td>20</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Rey</td>
              <td>10</td>
            </tr>
            
          </tbody>
        </table>
      </main>
      <Footer/>
    </div>
  );
};

export default TopClients;