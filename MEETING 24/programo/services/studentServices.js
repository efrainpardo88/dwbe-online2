const sequelize = require('./connect');

const getAllStudents = async () => {
  return await sequelize.query(
    "SELECT * FROM estudiante", 
    { type: sequelize.QueryTypes.SELECT }
  );
}

const getStudentById = async (id) => {
  return await sequelize.query(
    'SELECT * FROM estudiante WHERE id = ?',
    { 
      replacements: [id], 
      type: sequelize.QueryTypes.SELECT 
    }
  )
}

const addStudent = async (student) => {
  let array_insert = ['merengano', 'sultano', 'merengano@acamica.com', 'Rio de la Plata', 21, '20000101', 'soltero'];
    
  return await sequelize.query(
    'INSERT INTO `estudiante`(`nombre`, `apellido`, `correo`, `ciudad`, `edad`, `fechaNacimiento`, `estadoCivil`) VALUES(?, ?, ?, ?, ?, ?, ?)',
    { replacements: array_insert, type: sequelize.QueryTypes.SELECT }
  )
}

const updateStudentById = async (id, student) => {
  return await sequelize.query(
    'UPDATE estudiante SET ciudad = ? WHERE id = ?',
    { replacements: [student.ciudad, id]}
  )
}

const deleteStudentById = async (id) => {
  return await sequelize.query(
    'DELETE FROM estudiante WHERE id = ?',
    { replacements: [id] }
  )
}

module.exports = {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudentById,
  deleteStudentById
}