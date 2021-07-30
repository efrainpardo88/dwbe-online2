const express = require('express');
const router = express.Router({mergeParams: true});

router.get('/:id', (req, res) => {
  // TO DO
  res.json(`Trate el estudiante con el id = ${req.params.id}`);
});

router.get('', (req, res) => {
  // TO DO
  res.json(`Trate todos los estudiantes`);
});

router.get('/nombre/:name', (req, res) => {
  // TO DO
  res.json(`Trate todos los estudiantes que contengan el nombre = ${req.params.name}`);
});

module.exports = router;