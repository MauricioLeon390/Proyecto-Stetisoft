import * as citasService from "../services/citasService.js";

export const getCitas = (req, res) => {
  const citas = citasService.obtenerTodasLasCitas();
  res.status(200).json({ mensaje: "Lista de citas", total: citas.length, datos: citas });
};

export const createCita = (req, res) => {
  if (!req.body.cliente || !req.body.servicio || !req.body.empleado) {
    return res.status(400).json({ mensaje: "'cliente', 'servicio' y 'empleado' son requeridos." });
  }
  const nuevaCita = citasService.crearCita(req.body);
  res.status(201).json({ mensaje: "Cita registrada", citaCreada: nuevaCita });
};
export const updateCitaEstado = (req, res) => {
  try {
    const cita = citasService.actualizarEstadoCita(req.params.id, req.body.estado);
    res.status(200).json({ mensaje: "Estado actualizado", cita });
  } catch (error) {
    res.status(404).json({ mensaje: error.message });
  }
};

export const deleteCita = (req, res) => {
  try {
    citasService.eliminarCita(req.params.id);
    res.status(200).json({ mensaje: "Cita eliminada correctamente" });
  } catch (error) {
    res.status(404).json({ mensaje: error.message });
  }
};