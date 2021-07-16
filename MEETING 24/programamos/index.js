var express = require('express');
var app = express();
const sequelize = require('./conexion.js');


async function findAllSongs() {

    sequelize.query("SELECT * FROM cancion", { type: sequelize.QueryTypes.SELECT })
        .then(function (productos) {
            console.log(productos);
        })
}

async function findSongByArtist(nombre) {

    return await sequelize.query(`select * 
    from cancion 
    where banda_id in(
        select id
        from bandamusical
        where nombre like '%${nombre}%');`, 
    {
        type: sequelize.QueryTypes.SELECT 
    });
}

app.get('/canciones', async (req, resp) =>{

    const nombre = req.query.nombre;
    resp.json( await findSongByArtist( nombre ));
} );


app.listen(5050, function () {
    console.log('Sistema armado en el puerto 5050!');
});