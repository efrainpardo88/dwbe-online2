// const mongoose = require('./conexion.js');
// const express = require('express');
// const app = express();
// app.use(express.static(__dirname + 'conexion.js'));

// app.listen(3000, function () {
//     console.log('listening on 3000')
// })
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/restaurante', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const platos = mongoose.model('menus', {
    plato: String,
    precio: String,
    tipo_de_plato: String,
});

//Listado 
platos.find().then(function (resultado) {

    console.log(resultado);
});