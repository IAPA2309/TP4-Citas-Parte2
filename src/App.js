import ListaCitas from './components/ListaCitas.js/ListaCitas.js';
import Formulario from './components/CitaColumn.js/Formulario.js';
import { Toaster } from "sonner";
import { useState } from 'react';
import './App.css';

function App() {
  const [citas, setCitas] = useState([]);

  return (
    <div className="App">
      <Toaster position="top-center" richColors closeButton />
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario setCitas={setCitas} />
          </div>
          <div className="one-half column">
            <ListaCitas citas={citas} setCitas={setCitas} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
