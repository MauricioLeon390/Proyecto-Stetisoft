import express from "express";
import citasRoutes from "./routes/citasRoutes.js";
import authRoutes from "./routes/authRoutes.js";          
import { verificarToken } from "./middlewares/authMiddleware.js";

const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);                               
app.use("/api/citas", verificarToken, citasRoutes);          
export default app;