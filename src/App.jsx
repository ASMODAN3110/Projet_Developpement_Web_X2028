import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sheryl from './sheryl';
import Gestionmenu from './Gestionmenu';
import ReclamationE from './ReclamationE';
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ReclamationEm from './ReclamationEm';

function App() {
  return (
    <Router>
      <div>
        <Routes>
           <Route path="/" element={<Sheryl/>}/>
           <Route path="/gestionmenu" element={<Gestionmenu/>}/>
           <Route path="/reclamation" element={<ReclamationEm/>}/>
           <Route path="/menu" element={<menu/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
