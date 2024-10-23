import React from 'react';
import './Header.css'; // Assure-toi de créer ce fichier CSS

const Header = () => {
    const dishes = [
        { name: 'LE TARO', price: '2500F', image: '../assets/OIP (1).jpeg' },
        { name: 'NDOLE', price: '1000F', image: '../assets/download.jpeg' },
        { name: 'POULET DIRECTEUR GENERAL(DG)', price: '2000F', image: '../assets/th (4).jpeg' },
        { name: 'LE ERU', price: '1000F', image: '../assets/th (3).jpeg' },
        { name: "L'OKOK SUCRE", price: '1000F', image: '../assets/OIP (1).jpeg' },
        { name: 'MET DE PISTACHE', price: '2000F', image: '../assets/pudding.png'},
    ];

    const drinks = [
        { name: 'Mojito', price: '500F', image: '../assets/Mojito.png' },
        { name: 'Mai Tai', price: '500F', image: '../assets/mai tai.png' },
        { name: 'Coca', price: '500F', image: '../assets/coke.png' },
    ];

    return (
        <div className="container">
            <header className="d-flex justify-content-between align-items-center my-4">
                <img src="../assets/Screenshot (171) 2.png" alt="Logo du restaurant" className="logo" />
                <div>
                    <button className="btn btn-primary me-2 btn-custom">Se connecter</button>
                    <button className="btn btn-secondary btn-custom">S'inscrire</button>
                </div>
            </header>

            <h1 className="text-center title">Bienvenue au Zeducspace</h1>
            <h2 className="text-center subtitle">Voici certains de nos plats :</h2>

            <div className="row gallery">
                {dishes.map((dish, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card yellow-box gallery-item">
                            <img src={dish.image} alt={dish.name} className="card-img-top" />
                            <div className="card-body text-center">
                                <h5 className="card-title dish-name">{dish.name}</h5>
                                <p className="card-text dish-price">{dish.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="text-center">Voici certaines de nos boissons :</h2>

            <div className="row gallery">
                {drinks.map((drink, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card yellow-box gallery-item">
                            <img src={drink.image} alt={drink.name} className="card-img-top" />
                            <div className="card-body text-center">
                                <h5 className="card-title dish-name">{drink.name}</h5>
                                <p className="card-text dish-price">{drink.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <footer className="footer mt-4"></footer> {/* Espace vide comme footer */}
        </div>
    );
};

export default Header;