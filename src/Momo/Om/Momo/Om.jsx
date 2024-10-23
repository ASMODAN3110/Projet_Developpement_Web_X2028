import React, { useState } from "react";
import "./Om.css";
import {link} from 'react-router-dom';

const PaymentForm = () => {
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
      <link className="btn btn-secondary" to="/">
       <svg onClick={goBack} className="back-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
       <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
       </svg>
        </link>  
        <h2>Payez par MoMo/OM</h2>
        <form>
          <div className="form-group">
            <label htmlFor="numero">Numéro</label>
            <input type="text" id="numero" name="numero" />
          </div>
          <div className="form-group">
            <label htmlFor="nom">Nom</label>
            <input type="text" id="nom" name="nom" />
          </div>
          <div className="form-group">
            <label>Sélectionné le moyen</label>
            <div className="payment-options">
              <label>
                <input
                  type="radio"
                  name="paymentOption"
                  value="mtn"
                  checked={selectedOption === "mtn"}
                  onChange={handleOptionChange}
                />
                <img src="../img/momo.jpg" alt="MTN Mobile Money" />
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentOption"
                  value="orange"
                  checked={selectedOption === "orange"}
                  onChange={handleOptionChange}
                />
                <img src="../img/om.png" alt="Orange Money" />
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="code">Code</label>
            <input type="text" id="code" name="code" />
          </div>
          <button type="submit">Validé</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
