const express = require('express');
const router = express.Router({mergeParams: true});

router.get('/:id', (req, res) => {
  // TO DO
  res.json(`Trate la ciudad con el id = ${req.params.id}`);
});

router.get('', (req, res) => {
  // TO DO
  res.json(`Trate todos las ciudades`);
});

router.get('/nombre/:name', (req, res) => {
  // TO DO
  res.json(`Trate todos las ciudades que contengan el nombre = ${req.params.name}`);
});

module.exports = router;