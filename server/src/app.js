const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());

if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const databaseConnection = require("./config/database.js");
const student = require("./routes/student.route");

// student api
app.use("/api/v1", student);

module.exports = app;
