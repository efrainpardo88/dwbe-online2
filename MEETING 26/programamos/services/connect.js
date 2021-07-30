const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:Colombia.1@localhost:3306/acamicas');

sequelize.authenticate()
.then(() => {
  console.log('Conexión exitosa a la báse de datos');
})
.catch(err => {
  if (err.original.errno === 1049) {
    const dbContext = new Sequelize("", "root", "Colombia.1", {
      host: 'localhost',
      port: 3306,
      dialect: "mysql"
    });
    dbContext.query("CREATE DATABASE `acamicas`;")
    .then(() => console.log('Se creó la base de datos correctamente '))
    .catch(error => console.error(error));
  } 
});

module.exports = sequelize;


// config.js
module.exports = {
  MYSQL: {
    HOST: 'localhost',
    PORT: 3306,
    DATABASE: 'acamica',
    USER: 'root',
    PASSWORD: 'Colombia.1',
  },
  EXPRESS: {
    PORT: 3000
  }
}