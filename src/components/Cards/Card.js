import React from 'react';
import { toast } from 'sonner';
import './Card.css'

function Card({ cita, setCitas }) {
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const eliminarCita = () => {
    // Llamar a la función setCitas y pasar un callback para actualizar las citas
    setCitas((citasActuales) => {
      // Filtrar las citas y mantener solo las que no coinciden con la cita actual
      const nuevasCitas = citasActuales.filter((c) => c !== cita);
      return nuevasCitas;
    });
  };


  return (
    <div className="cita">
      <p>
        Mascota: <span>{mascota}</span>
      </p>
      <p>
        Dueño: <span>{propietario}</span>
      </p>
      <p>
        Fecha: <span>{fecha}</span>
      </p>
      <p>
        Hora: <span>{hora}</span>
      </p>
      <p>
        Sintomas: <span>{sintomas}</span>
      </p>
      <button
        className="button elimnar u-full-width"
        onClick={() => {
          toast.error("¿Elminar cita?", {
            action: {
              label: "Eliminar",
              onClick: () => eliminarCita(),
            },
          });
        }}
      >
        Eliminar ×
      </button>
    </div>
  );
}

export default Card