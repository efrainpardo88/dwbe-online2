var express = require('express');
var app = express();
const sequelize = require('./conexion.js');

async function findAllRows() {
    sequelize.query('UPDATE inscriptos SET telefono = "011455563232" WHERE id = ?',
        { replacements: [1]}
    ).then(function (restaurant) {
        console.log(restaurant)
    })
}

findAllRows();

app.listen(3000, function () {
    console.log('Sistema armado en el puerto 3000!');
});