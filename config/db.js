// import mongoose to connect this module to the database
const mongoose = require('mongoose');

// asynchronous function to connect to the database
const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected at: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

// export this as module to connect our server app to the database
module.exports = dbConnect;
