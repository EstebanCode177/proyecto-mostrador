import express from 'express';
const router = express.Router();
import {
    registrar,
    autenticar,
    confirmar,
    olvidePassword,
    comprobarToken,
    nuevoPassword,
    perfil,
  } from "../controllers/usuarioController.js";

import checkAuth from "../middlewares/checkAuth.js";

// Autenticación, Registro y Confirmación de Usuarios
router.post('/register', registrar);//crea un nuevo usuario
router.post('/login', autenticar);
router.get('/confirmar/:token', confirmar);
router.post("/olvide-password", olvidePassword);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);
router.get("/perfil", checkAuth, perfil);


export default router;