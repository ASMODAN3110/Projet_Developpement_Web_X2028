import React from "react";
import Header2 from '../StatistiqueClients/Header2.jsx';
import Footer from "../Menu/Footer.jsx";
import './Actualite.css'

const Actualite = () => {
    return (
       
      <div className="section">
         <Header2/>
        <div className="promotion">
            <h1>Promotions</h1>
            <div classname="div2">
                <p>Comandez un  plat de poison  braise et recevez 30% de reduction en utilisant ce code promo</p>
                <img src="../img/poisson.jpeg" alt="Promo" />
            </div>
            <div className="code">
                <label>P20R24</label>
                <button>Commander</button>
            </div>
            <hr></hr>
        </div>
        <div className="Événement">
            <h1>Événement</h1>
            <div classname="div2">
                <img src="../img/anniv.jpeg" alt="anniv" />
                <p>Recevez une livraison gratuite après une commande  en occasion de nôtre 1er anniversaire </p>
            </div>
            <div className="code">
                <label>E20E24</label>
                <button>Commander</button>
            </div>
            <hr></hr>
        </div>
        <div className="Parrainage">
            <h1>Parrainage</h1>
            <div classname="div2">
                <div><p>Partagez votre code de parrainage et recevez des points de fidélités</p></div>
                <div><img src="../img/Parrainage.png" alt="parrainage" /></div>
            </div>
            <div className="code">
                <label>P20A28</label>
                
            </div>
            
        </div>
        <Footer/>
            
       </div>
      
    );
  };
  
  export default Actualite;