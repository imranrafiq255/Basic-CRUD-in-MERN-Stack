const { studentModel } = require("../models/student.model");
exports.createStudent = async (req, res) => {
  try {
    const { studentName, studentRollNo, age, program } = req.body;
    await studentModel.create({
      studentName,
      studentRollNo,
      age,
      program,
      picture: req.file ? req.file.filename : "",
    });
    res.status(201).json({
      success: true,
      message: "Student added successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.showStudents = async (req, res) => {
  try {
    const students = await studentModel.find();

    res.status(201).json({
      success: true,
      students: students,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findByIdAndDelete({
      _id: id,
    });
    res.status(201).json({
      success: true,
      student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const { studentName, studentRollNo, age, program } = req.body;
    const id = req.params.id;
    const student = await studentModel.findOneAndUpdate(
      { _id: id },
      {
        studentName,
        studentRollNo,
        age,
        program,
        picture: req.file.filename,
      },
      { new: true }
    );
    if (!student) {
      return res.status(401).json({
        success: false,
        message: `User not found with id: ${id}`,
      });
    }
    res.status(201).json({
      success: true,
      message: `${studentName} is updated successfully`,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
