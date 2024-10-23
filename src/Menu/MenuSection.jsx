import React from "react";
import ItemCard from "./ItemCard";
import './App.css';
import panne from '../assets/panne.jpeg';
import pudding from '../assets/pudding.jpeg';
import ndole from '../assets/ndole.jpeg';
import shrimps from '../assets/shrimps.jpg';
import Poulet from '../assets/Poulet.jpeg';
import porc from '../assets/porc.jpeg';
import shrimps from '../assets/coke.jpeg';
import Poulet from '../assets/Mojito.jpeg';
import porc from '../assets/mai tai.jpeg';


const foodItems = [
  { name: "Poulet Panné", price: "4000CFA", image: "../assets/panne.jpeg" },
  { name: "Met de Pistache", price: "2000CFA", image: "../assets/pudding.jpeg" },
  { name: "Ndolé", price: "3000CFA", image: "../assets/ndole.jpeg" },
  { name: "Crevettes", price: "4000CFA", image: "../assets/shrimps.jpg" },
  { name: "Poulet Braisé", price: "2500CFA", image: "../assets/poulet.jpeg" },
  { name: "Porc Braisé", price: "3500CFA", image: "../assets/porc.jpeg" },
];
<hl></hl>
const drinkItems = [
  { name: "Mai Tai", price: "2000CFA", image: "../assets/mai tai.jpeg" },
  { name: "Mojito", price: "2000CFA", image: "../assets/Mojito.jpeg" },
  { name: "Coca Cola", price: "1000CFA", image: "../assets/coke.jpeg" },
];

const MenuSection = () => {
  return (
    <div className="menu-section">
      <h1>Menu Zeduc@Space</h1>
      <h2>Nos Nourritures</h2>
      <div className="food-grid">
        {foodItems.map((item, index) => (
          <ItemCard key={index} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
      <h2>Nos Boissons</h2>
      <div className="drink-grid">
        {drinkItems.map((item, index) => (
          <ItemCard key={index} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;