// Instancia de depndencias
const express = require('express');
const clientes = require('./routes/cliente');

// configuración del server
const server = express();
server.listen(3000, () => console.log('Listen on 3000 port'));
server.use(express.json());

// endpoints
server.use('/cliente', clientes);