// instantiate an express router to handle HTTP verbs
const router = require('express').Router();

// import mongoose Project model to use MongoDB collection methods to mutate our Database
const Project = require('../models/Project');

// GET '/api/projects'
// get all of the project documents within the collection
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

// GET '/api/projects/{id}'
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Project.findById(id);

    if (!project) {
      res.status(404).json({ success: true, message: `No project with ID: ${id} found` });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Something went wrong' });
  }
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
