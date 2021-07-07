const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/usuarios', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const ciudades = mongoose.model('ciudades', {
  ciudad: String,
  temperatura: Number
});

ciudades.find().then(respuesta => console.log(respuesta.map(item => ({ciudad: item.ciudad}))));