const express = require('express');
const fetch = require('node-fetch');

const server = express();
server.listen(3001);

server.get('/noticias', async (req, res) => {
  let respuesta = [];

  const data = await fetch(
    "https://google-search3.p.rapidapi.com/api/v1/news/q=colombia", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "62e9304dc7msh826c85eb14a7b04p1ddb29jsn7bd7e3565411",
      "x-rapidapi-host": "google-search3.p.rapidapi.com"
    }
  })
  .then(response => response.json());

  // // hacer el filtro con funciones de array
  // respuesta = data?.entries
  //   .filter((item,index) => index < 5)
  //   .map(item => ({
  //     titulo: item.title,
  //     resumen: item.summary
  //   }));

  // hacer el filtro con for
  for (let i = 0; i < 5 && data?.entries?.length; i++) {
    respuesta.push({
      titulo: data?.entries[i].title,
      resumen: data?.entries[i].summary
    })
  }

  res.json(respuesta);
})