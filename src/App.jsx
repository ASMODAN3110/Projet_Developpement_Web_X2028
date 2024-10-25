import React from "react";
import Reclamation from "./Reclamation/Reclamation";
import{ BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Section2 from "./Utilisateur/Section2";
import Homepage from "./Utilisateur/Homepage";
import Menu2 from "./Menu/Menu2";
import Actualite from "./Actualite/Actualite";
import { Panier } from "./Panier/Panier";
import TopClients from "./StatistiqueClients/TopClients";
import About from "./apropos/About";
// import { Reclamation } from "./Reclamation/Reclamation";
//import { Panier } from "./Panier/Panier";
//import GestionMenu from "./GestionMenu/GestionMenu";
// //import ReclamationForm from "./Reclamation/Reclamation.jsx";
// // import Activite from "./Acceuil/Activite.jsx";
// //import Acceuil from "./Acceuil/Acceuil.jsx";
//import Menu from "./Menu/Menu2.jsx";
// // import Acceuil from "./Acceuil/Acceuil.jsx";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js'
// //import Top from "./StatistiqueClients/Top.jsx";
//TopClients from "./StatistiqueClients/TopClients.jsx";
//import About from "./apropos/aPropos";
//import Termes from "./Termes/Termes";
//import ProfilePage from "./Profil/Profil.jsx";
//import Payment from "./Carte/Carte"
//import Actualite from "./Actualite/Actualite";
//import Paiement from "./Paiement/paiement";
//import Homepage from "./Utilisateur/Homepage";
//import ProfilePage from "./Profil/Profil";



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components from React Router

// Import the components from their respective folders
// import Menu2 from './Menu/Menu2';
// import Acceuil from './Acceuil/Acceuil';
// import PaymentForm from ".Momo/Om.jsx";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* Define the routes */}
//         <Routes>
//           <Route path="/" element={<Acceuil />} />    {/* Route for Acceuil (Home) */}
//           <Route path="../momo/om" element={<PaymentForm/>} />  {/* Route for Menu */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



function App() {
  return (
    <Router>
          <div>
            <Routes>
              <Route path="/" element={<Homepage/>}/>  
              <Route path="/apropos" element={<About/>}/>
              <Route path="/menu" element={<Menu2/>}/>
              <Route path="/actualite" element={<Actualite/>}/>
              <Route path="/panier" element={<Panier/>}/>
              <Route path="/statistiqueclients" element={<TopClients/>}/>

            </Routes>
          </div>
   </Router>
  );
}


export default App;





