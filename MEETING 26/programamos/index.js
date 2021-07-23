// Instancia de depndencias
const express = require('express');
const students = require('./routes/students');

// configuración del server
const server = express();
server.listen(3000, () => console.log('Listen on 3000 port'));
server.use(express.json());

// endpoints
server.use('/students', students);