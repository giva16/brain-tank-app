// Dotenv allows us to acces variables in .env with process.env.{variable name}
require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT;

// create an express app
const app = express();

// initialize server (server listening for HTTP requests at PORT)
app.listen(PORT, (req, res) => {
  console.log(`Server listening at port ${PORT}`);
});
