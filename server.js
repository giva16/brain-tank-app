// Dotenv allows us to acces variables in .env with process.env.{variable name}
require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3000;

// create an express app
const app = express();

// body parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Welcome route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Project Ideas API' });
});

// initialize server (server listening for HTTP requests at PORT)
app.listen(PORT, (req, res) => {
  console.log(`Server listening at port ${PORT}`);
});

// connect to our database
const dbConnect = require('./config/db');
dbConnect();

// Link server to projects api router
const projectsRouter = require('./routes/projects');
app.use('/api/projects', projectsRouter);
