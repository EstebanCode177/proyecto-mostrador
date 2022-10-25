import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/connection.js';
import usuarioRoutes from './router/usuarioRoutes.js';
import empresaRoutes from "./router/empresaRoutes.js";
import cors from 'cors';

const app = express();


// configuraciones
dotenv.config();

const whitelist = ["http://127.0.0.1:5173"];

const corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.includes(origin)) {
        // Puede consultar la API
        callback(null, true);
      } else {
        // No esta permitido
        callback(new Error("Error de Cors"));
      }
    },
};

app.use(cors(corsOptions));


// middlewares
app.use(express.json())

// rutas
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/empresas", empresaRoutes);

// app.get('/', (req, res) => {
//     res.send('Bienvenido a la api')
// })

app.set('port', process.env.PORT || 4000);
// iniciar servidor


app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'))
})