import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const Gestionmenu = () => {
  const [type, setType] = useState('nourriture');
  const [selectedName, setSelectedName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [foodList, setFoodList] = useState([]);
  const [drinkList, setDrinkList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // Store the selected item to delete

  // Predefined food and drink options
  const foodOptions = ['Eru', 'Ndolè Royale', 'Poulet DG','Roti de Poulet','Roti de viande',
'Roti de porc','Pilé Plantain'
  ];
  const drinkOptions = ['Coca', 'Mai Tai', 'Eau','Morijo','Booster','Ice','Djino','Sprite'];

  // Handle adding item to the respective list
  const handleAdd = () => {
    const newItem = { name: selectedName, price: parseInt(price), quantity };

    if (type === 'nourriture') {
      setFoodList([...foodList, newItem]);
    } else {
      setDrinkList([...drinkList, newItem]);
    }

    // Clear inputs after adding
    setSelectedName('');
    setPrice('');
    setQuantity(1);
  };

  // Handle deleting the selected item
  const handleDelete = () => {
    if (selectedItem !== null) {
      if (type === 'nourriture') {
        const updatedFoodList = foodList.filter((_, index) => index !== selectedItem);
        setFoodList(updatedFoodList);
      } else {
        const updatedDrinkList = drinkList.filter((_, index) => index !== selectedItem);
        setDrinkList(updatedDrinkList);
      }
      setSelectedItem(null); // Clear the selected item after deletion
    }
  };

  // Handle selection of an item (row click)
  const handleSelectItem = (index, itemType) => {
    setSelectedItem(index); // Mark the selected item by index
    setType(itemType); // Switch to the appropriate type (nourriture/boisson)
  };

  // Validate and set price input
  const handlePriceChange = (e) => {
    const value = e.target.value;
    // Use regex to allow only numbers
    if (/^\d*$/.test(value)) {
      setPrice(value);
    }


  };
  const navigate = useNavigate();
  const handleExit = () => {
    navigate('/sheryl'); // Redirection vers la page "sheryl"
  };

  return (
    <div 
      className="container-fluid" 
      style={{ 
        height: '100vh', 
        width: '100vw', 
        background: 'linear-gradient(180deg, #000000 11%, #CFBD97 90%)', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        color: 'white',
      }}
    >
      <div 
        className="inner-container" 
        style={{ 
          width: '90%', // Increased width to 90% of the viewport
          maxWidth: '600px', // Set a maximum width for larger screens
          padding: '30px', // Increased padding for a larger frame
          borderRadius: '8px', 
          background: 'linear-gradient(180deg, #000000 11%, #CFBD97 90%)' // New gradient background color
        }}
      >
        <h4 className="text-center mb-4">Gestion de menu</h4>
        <div className="exit-icon position-absolute" style={{ top: '10px', right: '10px' }}>
            <FaTimes onClick={handleExit} style={{ cursor: 'pointer', fontSize: '24px', color: '#fff' }} />
            </div>
        {/* Radio buttons for type selection */}
        <div className="mb-3 d-flex justify-content-between align-items-center">
  <div className="d-flex align-items-center">
    <label className="me-3">
      <input 
        type="radio" 
        value="nourriture" 
        checked={type === 'nourriture'} 
        onChange={(e) => setType(e.target.value)} 
      />
      Nourriture
    </label>
    <label>
      <input 
        type="radio" 
        value="boisson" 
        checked={type === 'boisson'} 
        onChange={(e) => setType(e.target.value)} 
      />
      Boisson
    </label>
  </div>
  <button className="btn-close" aria-label="Close"></button>
</div>


        {/* Name and Quantity input side by side */}
        <div className="mb-3 row">
          <div className="col">
            <label>Nom: </label>
            <select 
              className="form-select"
              value={selectedName}
              onChange={(e) => setSelectedName(e.target.value)}
            >
              <option value="">-- Choisissez --</option>
              {(type === 'nourriture' ? foodOptions : drinkOptions).map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="col">
            <label>Quantité: </label>
            <input 
              type="number" 
              className="form-control" 
              value={quantity} 
              min="1"
              onChange={(e) => setQuantity(e.target.value)} 
            />
          </div>
        </div>

        {/* Price input */}
        <div className="mb-3">
          <label>Prix: </label>
          <input 
            type="text" 
            className="form-control" 
            value={price} 
            onChange={handlePriceChange} 
          />
        </div>

        {/* Add button */}
        <button 
          className="btn btn-secondary mb-4 w-100"
          onClick={handleAdd}
          disabled={!selectedName || price === '' || quantity < 1} // Disable if inputs are invalid
        >
          Ajouter
        </button>

        {/* Tables */}
        <h5>Nourritures</h5>
        <table className="table table-bordered table-sm mb-4">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prix</th>
              <th>Quantité</th>
            </tr>
          </thead>
          <tbody>
            {foodList.map((food, index) => (
              <tr 
                key={index} 
                onClick={() => handleSelectItem(index, 'nourriture')} // Select on click
                style={{ backgroundColor: selectedItem === index && type === 'nourriture' ? '#d3d3d3' : 'transparent' }}
              >
                <td>{food.name}</td>
                <td>{food.price} FCFA</td>
                <td>{food.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h5>Boissons</h5>
        <table className="table table-bordered table-sm">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prix</th>
              <th>Quantité</th>
            </tr>
          </thead>
          <tbody>
            {drinkList.map((drink, index) => (
              <tr 
                key={index} 
                onClick={() => handleSelectItem(index, 'boisson')} // Select on click
                style={{ backgroundColor: selectedItem === index && type === 'boisson' ? '#d3d3d3' : 'transparent' }}
              >
                <td>{drink.name}</td>
                <td>{drink.price} FCFA</td>
                <td>{drink.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Action buttons */}
        <div className="d-flex justify-content-end">
          <button className="btn btn-danger me-2" onClick={handleDelete}>Supprimer</button>
          <button className="btn btn-success">Terminer</button>
        </div>
      </div>
    </div>
  );
};

export default Gestionmenu;
