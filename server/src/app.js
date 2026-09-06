import express from "express";
import citasRoutes from "./routes/citasRoutes.js";

const app = express();
app.use(express.json());
app.use("/api/citas", citasRoutes);

export default app;