import React from 'react';
import Card from '../Cards/Card.js';
import './ListaCitas.css'

function ListaCitas({ citas, setCitas }) {
  
  return (
    <>
    <h2>Administra tus citas</h2>
    {citas.map((cita, index) => (
      <Card 
        key={index}
        cita={cita}
        setCitas={setCitas}/>
    ))}
    </>
  )
}

export default ListaCitas