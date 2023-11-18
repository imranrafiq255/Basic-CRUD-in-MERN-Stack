import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddStudent.css";
const AddStudent = () => {
  const [studentName, setStudentName] = useState("");
  const [studentRollNo, setStudentRollNo] = useState("");
  const [age, setAge] = useState(20);
  const [program, setProgram] = useState("");
  const [picture, setPicture] = useState(null);
  const navigate = useNavigate();
  const formHandler = (e) => {
    e.preventDefault();
    const data = { studentName, studentRollNo, age, program, picture };
    const sendFormData = async () => {
      try {
        const response = await axios.post(
          "/api/v1/student/createstudent",
          data,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        console.log(response.data);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };
    sendFormData();
  };
  return (
    <>
      <form onSubmit={formHandler} encType="multipart/form-data">
        {" "}
        <input
          type="text"
          placeholder="Enter Student Name"
          name="studentName"
          onChange={(e) => setStudentName(e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Enter Student Roll No"
          name="studentRollNo"
          onChange={(e) => setStudentRollNo(e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Enter Age"
          name="age"
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <select onChange={(e) => setProgram(e.target.value)}>
          <option value="BSSE" selected>
            BSSE
          </option>
          <option value="BSIT">BSIT</option>
          <option value="BSCS">BSCS</option>
          <option value="BSAI">BSAI</option>
          <option value="BSML">BSML</option>
        </select>
        <br />
        <input
          type="file"
          name="picture"
          onChange={(e) => setPicture(e.target.files[0])}
          accept="image/*"
        />
        <input type="submit" className="btn btn-primary" />
      </form>
    </>
  );
};

export default AddStudent;
