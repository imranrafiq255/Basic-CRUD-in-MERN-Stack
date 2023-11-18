const mongoose = require("mongoose");

exports.databaseConnection = mongoose
  .connect(process.env.CONNECTION_URI)
  .then((con) => {
    console.log(`Database is connected on: ${con.connection.host}`);
  });
