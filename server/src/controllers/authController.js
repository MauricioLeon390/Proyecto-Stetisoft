import { validarCredenciales, generarToken } from '../services/authServices.js';

export const login = (req, res) => {
  const { correo, contrasena } = req.body;
  const usuario = validarCredenciales(correo, contrasena);
  if (!usuario) return res.status(401).json({ mensaje: "Credenciales inválidas" });
  const token = generarToken(usuario);
  res.status(200).json({ mensaje: "Login exitoso", token });
};