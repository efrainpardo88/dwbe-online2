const mongoose = require('./connect');
const schema = mongoose.Schema;

const contacto = new schema({
  telefono: String,
  direccion: String
})

const cliente = new schema({
  nombre: String,
  apellido: String,
  email: String,
  contacto: {contacto}
})

mongoose.model('cliente', cliente);
const clienteModel = mongoose.model('cliente');

module.exports = clienteModel;
