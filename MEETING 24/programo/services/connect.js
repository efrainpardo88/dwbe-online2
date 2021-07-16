// Instancia de dependencias
const Sequelize = require('sequelize');

// Configuración del Sequalize
const path = 'mysql://root:Colombia.1@localhost:3306/acamica';
const sequelize = new Sequelize(path, { operatorsAliases: false });

sequelize.authenticate().then(() => {
    console.log('Conectado.');
}).catch(err => {
    console.error('Error de conexion:', err);
}).finally(() => {
    sequelize.close();
});

module.exports = sequelize;