const Sequelize = require('sequelize');
const path = 'mysql://root@localhost:3306/event_eventos';
const sequelize = new Sequelize(path, { operatorsAliases: false });

sequelize.authenticate().then(() => {
    console.log('Conectado.');
}).catch(err => {
    console.error('Error de conexion:', err);
}).finally(() => {
    sequelize.close();
});

module.exports = sequelize;