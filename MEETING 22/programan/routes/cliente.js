// Instancia de depndencias
var express = require('express');    
const clientsServices = require('../services/clientsServices');

// configuración de las rutas
const router = express.Router();

// endpoint para crear un cliente
router.post('/', async (req, res) => {
  try {
    // con destructuring sacamos los valores del body
    const {
      nombre,
      apellido,
      email
    } = req.body;
  
    const client = {
      nombre: nombre,
      apellido: apellido,
      email: email
    };

    // llamamos al método que creamos para agregar un cliente en nuestra base de datos
    res.json(await clientsServices.addClient(client));
  } 
  catch (error) {
    // si existe un error lo atrapamos aqui y lo devolvemos
    console.error(error);
    res.status(500).json(error);
  }
})

// endpoint para agregar información de contacto a un cliente existente
router.post('/:email/contacto', async (req, res) => {
  try {
    const email = req.params.email;
    const {
      telefono,
      direccion
    } = req.body;
    
    const contact = [{
      telefono: telefono,
      direccion: direccion
    }]

    // llamamos al método que creamos para agregar el contacto al cliente
    res.json(await clientsServices.addClientContactInfo(email, contact));
  } 
  catch (error) {
    // si existe un error lo atrapamos aqui y lo devolvemos
    console.error(error);
    res.status(500).json(error);
  }
})

module.exports = router;