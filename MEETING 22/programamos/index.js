// instancia de depndencias
const express = require('express');
const clienteModel = require('./clientes-model');

// configuración del server
const server = express();
server.listen(3000);
server.use(express.json());

// endpoints
server.post('/cliente', async (req, res) => {
  const {
    nombre,
    apellido,
    email
  } = req.body;

  // Traemos el usuario por el email
  const resultado = await clienteModel.find({email: email});
  
  if(resultado.length === 0) {
    // Almacenar en base de datos
    const dbCliente = new clienteModel({
      nombre: nombre,
      apellido: apellido,
      email: email
    });
    dbCliente.save();

    res.json({
      mensaje:  `Se creó el cliente satisfactoriamente`
    })
  }
  else {
    res.status(400).json({
      mensaje:  `El cliente con el email: ${email} ya existe`
    })
  }
})

server.post('/cliente/:email/contacto', async (req, res) => {
  const email = req.params.email;
  const {
    telefono,
    direccion
  } = req.body;
  
  // Traemos el usuario por el email
  const resultado = await clienteModel.find({email: email});
  resultado[0]?.contacto = [{
    telefono: telefono,
    direccion: direccion
  }]
  const dbCliente = new clienteModel(resultado[0]);
  dbCliente.save();

  res.send('ok');
})