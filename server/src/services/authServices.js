import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { usuarios } from '../data/usuarios.js';

export function validarCredenciales(correo, contrasena) {
  const usuario = usuarios.find(u => u.correo === correo);
  if (!usuario) return null;
  const esValida = bcrypt.compareSync(contrasena, usuario.contrasena);
  return esValida ? usuario : null;
}

export function generarToken(usuario) {
  const payload = { id: usuario.id, rol: usuario.rol };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
}