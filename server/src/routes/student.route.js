const {
  createStudent,
  showStudents,
  deleteStudent,
  updateStudent,
} = require("../controllers/student.controller");

const express = require("express");
const image = require("../config/image");
const router = express.Router();

router
  .route("/student/createstudent")
  .post(image.single("picture"), createStudent);
router.route("/student/allstudents").get(showStudents);
router.route("/student/deletestudent/:id").delete(deleteStudent);
router
  .route("/student/updatestudent/:id")
  .put(image.single("picture"), updateStudent);
module.exports = router;
