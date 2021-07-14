const mongoose = require('../services/connect');
const schema = mongoose.Schema;

const contacto = new schema({
  telefono: String,
  direccion: String
})

const cliente = new schema({
  nombre: String,
  apellido: String,
  email: String,
  saldo: Number,
  contacto: [contacto]
})

mongoose.model('cliente', cliente);
const clientsModel = mongoose.model('cliente');

module.exports = clientsModel;
