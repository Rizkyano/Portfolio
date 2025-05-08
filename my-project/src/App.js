import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "../src/components/Navbar";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import ProjectWeb from "./pages/projectWeb";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project" element={<Project />} />
          <Route path="/web" element={<ProjectWeb />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
