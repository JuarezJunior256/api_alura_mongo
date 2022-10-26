import express from "express";
import AutoresController from "../controllers/autoresController.js";

const router = express.Router();

router
    .get("/autores", AutoresController.listarAutores)
    .get("/autores/:id", AutoresController.listarAutorPorId)
    .post("/autores", AutoresController.cadastrarAutores)
    .put("/autores/:id", AutoresController.atualizarAutores)
    .delete("/autores/:id", AutoresController.excluirAutores);

export default router;
