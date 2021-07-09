// instancia de depndencias
const express = require('express');
const clienteModel = require('./clientes-model');

// configuración del server
const server = express();
server.listen(3000);
server.use(express.json());

// endpoints
server.post('/cliente', (req, res) => {
  const {
    nombre,
    apellido,
    email
  } = req.body;

  // Almacenar en base de datos
  const dbCliente = new clienteModel({
    nombre: nombre,
    apellido: apellido,
    email: email
  });
  dbCliente.save();

  res.send('ok');
})

server.post('/cliente/:email/contacto', (req, res) => {
  const email = req.params.email;
  
  console.log(email);

  res.send('ok');
})