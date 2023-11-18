import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch("/api/v1/student/allstudents");
        const { students } = await response.json();
        setLoading(false);
        setStudentData(students);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchingData();
  }, []);

  const deleteRecord = async (id) => {
    try {
      const response = await axios.delete(
        `/api/v1/student/deletestudent/${id}`
      );
      console.log(response);

      // Update the state after successful deletion
      setStudentData((prevData) =>
        prevData.filter((student) => student._id !== id)
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  const updateRecord = (data) => {
    const serializedData = encodeURIComponent(JSON.stringify(data));
    navigate(`/updatestudent/${serializedData}`);
  };
  return (
    <>
      <button className="btn btn-success mx-5 my-5" onClick={() => {}}>
        <NavLink to={"/addstudent"}>Add Student</NavLink>
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Roll No</th>
            <th scope="col">Age</th>
            <th scope="col">Program</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <div className="text-center w-100">Loading</div>
          ) : studentData.length === 0 ? (
            <h1 className="text-center">No Record</h1>
          ) : (
            studentData.map((student) => (
              <tr key={student._id}>
                <th scope="row">
                  <img
                    src={"Images/" + student.picture}
                    alt=""
                    width={60}
                    height={100}
                  />
                </th>
                <td>{student.studentName}</td>
                <td>{student.studentRollNo}</td>
                <td>{student.age}</td>
                <td>{student.program}</td>
                <td
                  onClick={() => {
                    updateRecord(student);
                  }}
                >
                  Edit
                </td>
                <td onClick={() => deleteRecord(student._id)}>Delete</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default Home;
