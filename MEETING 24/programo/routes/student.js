// Instancia de depndencias
var express = require('express');    
const studentServices = require('../services/studentServices');

// configuración de las rutas
const router = express.Router();

// Manejo de errores
const catchError = (error, res) => {
  console.error(error);
  res.status(500).json(error);
}

router.get('/', async (req, res) => {
  try {
    res.json(await studentServices.getAllStudents());
  } 
  catch (error) { catchError(error, res); }
});

router.get('/:id', async (req, res) => {
  try {
    res.json(await studentServices.getStudentById(req.params.id));
  } 
  catch (error) { catchError(error, res); }
});

router.post('/', async (req, res) => {
  try {
    const student = req.body;
    res.json(await studentServices.addStudent(student));
  } 
  catch (error) { catchError(error, res); }
});

router.put('/:id', async (req, res) => {
  try {
    const student = req.body;
    res.json(await studentServices.updateStudentById(req.params.id, student));
  } 
  catch (error) { catchError(error, res); }
});

router.delete('/:id', async (req, res) => {
  try {
    res.json(await studentServices.deleteStudentById(req.params.id));
  } 
  catch (error) { catchError(error, res); }
});