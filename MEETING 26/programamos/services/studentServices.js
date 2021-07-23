const StudenModel = require('../models/studentModel');
const sequelize = require('../services/connect');

const getAllStudents = async () => {
  return await StudenModel.findAll(); 
}

module.exports = {
  getAllStudents
};