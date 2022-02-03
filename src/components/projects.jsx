import React from "react";
import Project from "./project";
import "../styling/projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1 className="section-title">Projects</h1>

      <div className="projects-container">
        <Project
          src="images/Student-Residence-System.png"
          alt="Image of Marmik's Student Residence System project"
          title="Student Residence System"
          discription="A Java object-oriented university residence system. Constructed through six application versions, various software design patterns, and a GUI."
          gitlink=""
          sideLeft="false"
          id="student"
        />
        <Project
          src="images/BookBees-one.png"
          alt="Image of Marmik's BookBees project"
          title="BookBees"
          discription="An interactive, responsive beekeeping UI built using React.js, HTML, and CSS."
          gitlink="https://github.com/marmikpatel19/BookBees"
          sideLeft="true"
          link="https://sad-lamport-370283.netlify.app/"
          id="bookbees"
        />
        <Project
          src="images/EnviroSearch-one.png"
          alt="Image of Marmik's EnviroSearch project"
          title="EnviroSearch"
          discription="An app that displays corporations’ environmental footprints. Developed on Android Studio/Java using Google Custom Search JSON API."
          gitlink="https://github.com/marmikpatel19/EnviroSearch"
          sideLeft="false"
          id="envirosearch"
        />
      </div>
    </div>
  );
}

export default Projects;
