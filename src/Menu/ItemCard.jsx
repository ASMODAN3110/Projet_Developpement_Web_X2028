import React from "react";
import './App.css'

const ItemCard = ({ name, price, image }) => {
  return (
    <div className="item-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <button>Commander</button>
    </div>
  );
};

export default ItemCard;