var express = require('express');
var app = express();
const sequelize = require('./conexion.js');


async function findAllRows() {
    let sql = 'SELECT eventos.id, eventos.nombre as evento, inscriptos.nombre, inscriptos.email, '+
    'inscriptos.telefono FROM eventos inner join inscriptos '+
    'on inscriptos.evento_id = eventos.id '+
    'order by inscriptos.nombre asc '+
    'LIMIT 5';

    sequelize.query( sql, { type: sequelize.QueryTypes.SELECT })
        .then(function (productos) {
            console.log(productos);
        })
}

findAllRows();


app.listen(4000, function () {
    console.log('Sistema armado en el puerto 4000!');
});