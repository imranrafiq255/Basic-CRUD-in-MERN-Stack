import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.js";
import AddStudent from "./Components/AddStudent/AddStudent.js";
import UpdateStudent from "./Components/UpdateStudent/UpdateStudent.js";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/updatestudent/:data" element={<UpdateStudent />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
