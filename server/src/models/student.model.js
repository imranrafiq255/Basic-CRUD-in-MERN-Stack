const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
    },
    studentRollNo: String,
    age: Number,
    program: String,
    picture: String,
  },
  { timestamps: true }
);

exports.studentModel = mongoose.model("Student", studentSchema);
