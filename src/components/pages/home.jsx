import React from "react";
import "../../App.css";
import Navbar from "../navbar";
import Aboutme from "../aboutme";
import Projects from "../projects";

function home() {
  return (
    <>
      <Navbar />
      <Aboutme />
      <Projects />
    </>
  );
}

export default home;
