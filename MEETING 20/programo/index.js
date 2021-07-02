// Instanciamos las dependencias
const express = require('express');
const fetch = require('node-fetch');

// Configuramos el servidor con express
const server = express();
server.listen(3001);

// // Funcion normal
// function informacionUsuaioGitHub(nombre) {
//   fetch(`https://api.github.com/users/${nombre}`)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
// }

// Función ascincrona
async function informacionUsuaioGitHub(nombre) {
  let request = await fetch(`https://api.github.com/users/${nombre}`);
  let dataJson = await request.json();

  console.log(dataJson);
}

// // Llamado de la función
// informacionUsuaioGitHub('efrainpardo88');

// Creamos los endpoints con el sufijo await en el callback del endpoint
server.get('/usuarios', async (req, res) => {
  const nombre = req.query.nombre;
  const data = await fetch(`https://api.github.com/users/${nombre}`).then(request => request.json());

  res.json(data);
})