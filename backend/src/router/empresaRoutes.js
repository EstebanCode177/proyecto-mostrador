import express from "express";

import {
  obtenerEmpresas,
  crearEmpresa,
  obtenerEmpresa,
  editarEmpresa,
  eliminarEmpresa,
  agregarColaborador,
  eliminarColaborador,
  obtenerLocales,
  nuevoLocal,
  obtenerLocal,
  editarLocal,
  eliminarLocal,
  obtenerProductos
} from "../controllers/empresaController.js";
import checkAuth from "../middlewares/checkAuth.js";
import comprobarIdMongo from "../middlewares/comprobarIdMongo.js";

const router = express.Router();

router
  .route("/")
  .get(checkAuth, obtenerEmpresas)
  .post(checkAuth, crearEmpresa);

router
  .route("/:id")
  .get(checkAuth, comprobarIdMongo, obtenerEmpresa)
  .put(checkAuth, comprobarIdMongo, editarEmpresa)
  .delete(checkAuth, comprobarIdMongo, eliminarEmpresa);


router.post("/colaboradores/:id", checkAuth, agregarColaborador);
router.post("/eliminar-colaborador/:id", checkAuth, eliminarColaborador);

export default router;

