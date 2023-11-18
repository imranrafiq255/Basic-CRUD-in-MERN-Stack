import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
const UpdateStudent = () => {
  const { data } = useParams();
  const parsedData = JSON.parse(data);

  const [studentName, setStudentName] = useState(parsedData.studentName);
  const [studentRollNo, setStudentRollNo] = useState(parsedData.studentRollNo);
  const [age, setAge] = useState(parsedData.age);
  const [program, setProgram] = useState(parsedData.program);
  const [picture, setPicture] = useState(parsedData.picture);
  console.log(studentName);
  const formHandler = (e) => {
    e.preventDefault();
    const updateData = async () => {
      const formData = new FormData();
      formData.append("studentName", studentName);
      formData.append("studentRollNo", studentRollNo);
      formData.append("age", age);
      formData.append("program", program);
      formData.append("picture", picture);

      await axios.put(
        `/api/v1/student/updatestudent/${parsedData._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    };
    updateData();
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

export default UpdateStudent;
