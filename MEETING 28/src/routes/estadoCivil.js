const express = require('express');
const router = express.Router({mergeParams: true});

router.get('/:id', (req, res) => {
  // TO DO
  res.json(`Trate el estado civil con el id = ${req.params.id}`);
});

router.get('', (req, res) => {
  // TO DO
  res.json(`Trate todos los estados civiles`);
});

router.get('/nombre/:name', (req, res) => {
  // TO DO
  res.json(`Trate todos los estados civiles que contengan el nombre = ${req.params.name}`);
});

module.exports = router;