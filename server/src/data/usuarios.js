import bcrypt from 'bcryptjs';


export const usuarios = [
  { id: 1, correo: "admin@stetisoft.com", contrasena: bcrypt.hashSync("1234", 10), rol: "admin" }
];