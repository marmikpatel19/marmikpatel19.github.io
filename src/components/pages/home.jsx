import React from "react";
import "../../App.css";
import Navbar from "../navbar";
import Aboutme from "../aboutme";
import Projects from "../projects";
import Experiences from "../experiences";
import Education from "../education";
import ManagementExps from "../managementExps";
import Footer from "../footer";

function home() {
  return (
    <>
      <Navbar />
      <Aboutme />
      <Projects />
      <Experiences />
      <Education />
      <ManagementExps />
      <Footer />
    </>
  );
}

export default home;
