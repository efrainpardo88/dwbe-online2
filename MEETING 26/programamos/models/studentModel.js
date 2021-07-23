const { DataTypes, Model } = require('sequelize');
const sequelize = require('../services/connect');
const CityModel = require('./cityModel');
const MaritalStatusModel = require('./maritalStatusModel');

class StudenModel extends Model { }

StudenModel.init({
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  correo: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  idCiudad: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  fechaNacimiento: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  idEstadoCivil: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'estudiante',
  timestamps: false
});

StudenModel.belongsTo(CityModel, {foreignKey: 'idCiudad'});
StudenModel.belongsTo(MaritalStatusModel, {foreignKey: 'idEstadoCivil'});

module.exports = StudenModel;
