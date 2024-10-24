import React, { useState } from 'react';
import './Paiement.css'; 
import Header2 from '../StatistiqueClients/Header2';
import Footer from '../Menu/Footer';
import {link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Paiement = () => {
  const [codeReduction, setCodeReduction] = useState('');
  const [total, setTotal] = useState(3100); // Total des articles
  const [fraisLivraison, setFraisLivraison] = useState(200); // Exemple frais de livraison

  const totalAPayer = total + fraisLivraison;

  return (
    <div className="container">
      <Header2/>

      <div className="main-content">
        <div className="articles">
        <table className="top-clients-table">
          <thead>
            <tr>
              <th>Article</th>
              <th>Quantite</th>
              <th>Prix (Fcfa)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Okok</td>
              <td>2</td>
              <td>2000</td>
            </tr>
            <tr>
              <td>Poulet</td>
              <td>1</td>
              <td>1500</td>
            </tr>
            
          </tbody>
        </table>
        <p className="info">
            Pour le paiement de vos articles il est possible de passer par carte bancaire ou utiliser les solutions mobile comme Orange money ou Mobile Money.
          </p>

          <div className="code-reduction">
            <label htmlFor="codeReduction">Code de Réduction</label>
            <input 
              type="text" 
              id="codeReduction" 
              value={codeReduction} 
              onChange={(e) => setCodeReduction(e.target.value)}
            />
          </div>
        </div>

        <div className="paiement">
          <h3>Paiement</h3>
          <div>
            <label>Total</label>
            <input type="text" value={total} readOnly />
          </div>
          <div>
            <label>Frais de Livraison</label>
            <input type="text" value={fraisLivraison} readOnly />
          </div>
          <div>
            <label>Total à Payer</label>
            <input type="text" value={totalAPayer} readOnly />
          </div>
          <div>
            <label>Option de Paiement</label>
            <select>
              <option value="orange">Orange Money</option>
              <option value="mobile">Mobile Money</option>
              <option value="carte">Carte Bancaire</option>
            </select>
          </div>
          <link className="btn btn-secondary" to="../Momo/om">Commander</link>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Paiement;
