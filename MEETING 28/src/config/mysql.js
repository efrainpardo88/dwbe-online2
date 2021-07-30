const Sequelize = require('sequelize');
const sequelize = new Sequelize(`mysql://${process.env.MYSQL_USER}:${MYSQL_PASS}@${MYSQL_HOST}:${MYSQL_PORT}/${MYSQL_DATABASE}`);

module.exports = sequelize;