// Instancia de dependencias
const Sequelize = require('sequelize');

// Configuración del Sequalize
const path = 'mysql://root:Colombia.1@localhost:3306/acamica';
const sequelize = new Sequelize(path, { operatorsAliases: false });


module.exports = sequelize;