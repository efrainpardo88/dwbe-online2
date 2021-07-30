const express = require('express');
require('dotenv').config();

console.log(process.env.NODE_ENV);

const estudiantesRouter = require('./src/routes/estudiantes');
const ciudadesRouter = require('./src/routes/ciudades');
const estadoCivilRouter = require('./src/routes/estadoCivil');

const server = express();
server.listen(
  process.env.EXPRESS_PORT,
  () => console.log(`El servicio está corriendo en el puerto ${process.env.EXPRESS_PORT}`)
);

server.use('/estudiantes', estudiantesRouter);
server.use('/ciudades', ciudadesRouter);
server.use('/estado-civil', estadoCivilRouter);