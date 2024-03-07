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
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

// GET '/api/projects/{id}'
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const project = await Project.findById(id);

    if (!project) {
      res.status(404).json({ success: true, message: `No project with ID: ${id} found` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Something went wrong.' });
  }
});

// POST '/api/projects'
router.post('/', async (req, res) => {
  // create an idea document based on the model
  const project = new Project({
    title: req.body.title,
    text: req.body.text,
    tags: req.body.tags,
    update: req.body.update,
    username: req.body.username,
    githubURL: req.body.githubURL,
    liveURL: req.body.liveURL,
    completed: req.body.completed,
  });

  try {
    // save the idea document into the database
    await project.save();
    res.json({ success: true, data: project });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong.' });
  }
});

// PUT '/api/projects/{:id}'
router.put('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    // get the project, update the fields, and return the updated version
    const project = await Project.findByIdAndUpdate(
      id,
      {
        $set: {
          title: req.body.title,
          text: req.body.text,
          tags: req.body.tags,
          update: req.body.update,
          githubURL: req.body.githubURL,
          liveURL: req.body.liveURL,
          completed: req.body.completed,
        },
      },
      { new: true }
    );

    res.json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Something went wrong.' });
  }
});

// DELETE '/api/projects/{:id}'
router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    // get the project by id and delete it
    await Project.findByIdAndDelete(id);

    res.json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Something went wrong.' });
  }
});

module.exports = router;
