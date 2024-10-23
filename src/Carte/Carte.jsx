import React, { useState }  from "react";
import "./carte.css";

const Payment = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const goBack = () => {
    window.history.back(); // Go back to the previous page
  };

  return (
    <div className="payment-form-container">
      <div className="payment-form">
       <svg onClick={goBack} className="back-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
       <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
       </svg>
          
        <h2>Payez par carte bancaire</h2>
        <form>
        <div className="form-group">
            <label>Montant du Paiement</label>
            <label>3500frs</label>

           
          </div>
          <div className="form-group">
            <label htmlFor="numero">Nom de la carte</label>
            <input type="string" id="nom" name="nom"
            placeholder="SGBC"
            required
            />
            
          </div>
          <div className="form-group">
            <label htmlFor="nom">Numéro de la carte</label>
            <input type="int" id="numero" name="numero" 
             placeholder="4275315603725443"
             required
             />
          </div>
          <div className="down">
          <div className="form-group">
            <label htmlFor="code">Date d'expiration</label>
            <input type="int" id="date" name="Date"
              placeholder="09/2024"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="code">Code de sécurité</label>
            <input type="int" id="code" name="code"
            placeholder="xxxx"
            required
            />
          </div>
          </div>
          <button type="submit">Validé</button>
        </form>
      </div>
    </div>
  );
};

export default Payment
