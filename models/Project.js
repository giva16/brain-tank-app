// import mongoose to build schema and export the model based on the schema
const mongoose = require('mongoose');

// refer to /images/project-schema.webp for schema design
const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  text: {
    type: String,
    required: [true, 'Please enter a text description of the project.'],
  },
  tags: {
    type: [String],
  },
  update: {
    type: String,
  },
  username: {
    type: String,
  },
  githubURL: {
    type: String,
  },
  liveURL: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: date.now,
  },
});

// Export a mongoose model based on the schema above, we will use it in the router
module.exports = mongoose.model('Project', ProjectSchema);
