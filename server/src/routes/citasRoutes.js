import { Router } from "express";
import { getCitas, createCita, updateCitaEstado, deleteCita } from "../controllers/citasController.js";

const router = Router();
router.get("/", getCitas);
router.post("/", createCita);
router.put("/:id", updateCitaEstado);
router.delete("/:id", deleteCita);

export default router;