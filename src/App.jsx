import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sheryl from './sheryl';
import Gestionmenu from './Gestionmenu';
import ReclamationE from './ReclamationE';
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ReclamationEm from './ReclamationEm';
import ListesReclamation from './ListesReclamation';

function App() {
  return (
    <Router>
      <div>
        <Routes>
           <Route path="/" element={<Sheryl/>}/>
           <Route path="/gestionmenu" element={<Gestionmenu/>}/>
           <Route path="/reclamation" element={<ReclamationEm/>}/>
           <Route path="/ListesReclamation" element={<ListesReclamation/>}/>
           <Route path="/ReclamationEm" element={<ReclamationEm/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
