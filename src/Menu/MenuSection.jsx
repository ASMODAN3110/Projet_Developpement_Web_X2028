import React from "react";
import ItemCard from "./ItemCard";
import './App.css';
import panne from '../assets/panne.jpeg';
import pudding from '../assets/pudding.jpeg';
import ndole from '../assets/ndole.jpeg';
import shrimps from '../assets/shrimps.jpg';
import Poulet from '../assets/Poulet.jpeg';
import porc from '../assets/porc.jpeg';
import coke from '../assets/coke.jpeg';
import Mojito from '../assets/Mojito.jpeg';
import mai from '../assets/mai.jpeg';


const foodItems = [
  { name: "Poulet Panné", price: "4000CFA", image: panne },
  { name: "Met de Pistache", price: "2000CFA", image: pudding },
  { name: "Ndolé", price: "3000CFA", image: ndole },
  { name: "Crevettes", price: "4000CFA", image: shrimps },
  { name: "Poulet Braisé", price: "2500CFA", image: Poulet },
  { name: "Porc Braisé", price: "3500CFA", image: porc },
];
<hl></hl>
const drinkItems = [
  { name: "Mai Tai", price: "2000CFA", image: mai },
  { name: "Mojito", price: "2000CFA", image: Mojito},
  { name: "Coca Cola", price: "1000CFA", image: coke },
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