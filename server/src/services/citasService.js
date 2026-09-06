let citas = [
  { id: 1, cliente: "Juan Pérez", servicio: "Corte de cabello", empleado: "María López", estado: "Pendiente" }
];

export const obtenerTodasLasCitas = () => citas;

export const crearCita = (datosCita) => {
  const nuevaCita = {
    id: citas.length + 1,
    cliente: datosCita.cliente,
    servicio: datosCita.servicio,
    empleado: datosCita.empleado,
    estado: "Pendiente"
  };
  citas.push(nuevaCita);
  return nuevaCita;
};
export const actualizarEstadoCita = (id, nuevoEstado) => {
  const cita = citas.find((c) => c.id === Number(id));
  if (!cita) {
    throw new Error("Cita no encontrada");
  }
  cita.estado = nuevoEstado;
  return cita;
};

export const eliminarCita = (id) => {
  const indice = citas.findIndex((c) => c.id === Number(id));
  if (indice === -1) {
    throw new Error("Cita no encontrada");
  }
  citas.splice(indice, 1);
};