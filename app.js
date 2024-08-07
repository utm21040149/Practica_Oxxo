import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import testEmpleado from './backend/controllers/empleados.controllers.js';
import testGerentes from './backend/controllers/gerentes.controllers.js';
import testProductos from './backend/controllers/productos.controllers.js';
import testProductosFaltantes from './backend/controllers/ProductosFaltantes.controllers.js';
import testPromociones from './backend/controllers/promociones.controllers.js';

dotenv.config();
mongoose.connect(process.env.url)
.then (()=> {
    console.log("Si Funciono gracias a los Padrinos Magicos")
})
.catch((err)=>{
    console.log("No funciono porque el diablo es malo")
})
const app = express();
app.use (cors());

app.listen(4005,()=>{
    console.log ('Funciona el Servidor')
})

testEmpleado()
testGerentes()
testProductos()
testProductosFaltantes()
testPromociones()