import React, { useState } from 'react';
import './Formulario.css';
import { toast } from 'sonner';

function Formulario({ setCitas }) {
  const [mascota, setMascota] = useState("");
  const [propietario, setPropietario] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");

  const validarCampos = () => {
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(validarCampos()){
      const nuevaCita = {
        mascota,
        propietario,
        fecha,
        hora,
        sintomas,
      };

      setCitas((citas) => [...citas, nuevaCita]);

      // Limpiar el formulario
      setMascota("");
      setPropietario("");
      setFecha("");
      setHora("");
      setSintomas("");
    }else{
      toast.error("Completar todos los campos");
    }

  }

  return (
    <>
      <h2>Crear mi cita</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          value={mascota}
          onChange={(e) => setMascota(e.target.value)}
          className="u-full-width"
          placeholder="Nombre Mascota"
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          value={propietario}
          onChange={(e) => setPropietario(e.target.value)}
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
        />
        <label>Fecha</label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className="u-full-width"
        />
        <label>hora</label>
        <input
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          className="u-full-width"
        />
        <label>Sintomas</label>
        <textarea
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
          className="u-full-width"
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
}

export default Formulario