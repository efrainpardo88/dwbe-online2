const StudenModel = require('../models/studentModel');
const CityModel = require('../models/cityModel');
const MaritalStatusModel = require('../models/maritalStatusModel')
const sequelize = require('../services/connect');

const getAllStudents = async () => {
  return await StudenModel.findAll({
    include: [
      {
        model: CityModel
      },
      {
        model: MaritalStatusModel
      }
    ]
  }); 
}

module.exports = {
  getAllStudents
};