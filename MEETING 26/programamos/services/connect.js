const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:Colombia.1@localhost:3306/acamica');

module.exports = sequelize;