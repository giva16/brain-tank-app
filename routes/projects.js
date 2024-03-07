// instantiate an express router to handle HTTP verbs
const router = require('express').Router();

// import mongoose Project model to use MongoDB collection methods to mutate our Database
const Project = require('../models/Project');

// GET '/api/projects'
router.get('/', (req, res) => {
  res.json({ success: true, message: 'Succesful GET Request' });
});

// GET '/api/projects/{id}'
router.get('/:id', (req, res) => {
  res.json({ success: true, message: 'Succesful GET Request' });
});

// POST '/api/projects'
router.post('/', (req, res) => {
  res.json({ success: true, message: 'Succesful POST Request' });
});

// PUT '/api/projects/{:id}'
router.put('/', (req, res) => {
  res.json({ success: true, message: 'Succesful PUT Request' });
});

// DELETE '/api/projects/{:id}'
// GET '/api/projects'
router.delete('/', (req, res) => {
  res.json({ success: true, message: 'Succesful GET Request' });
});

module.exports = router;
