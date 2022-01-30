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
          discription="An object-oriented university residence system developed using Java. It was constructed through six application versions with various software design patterns and includes a GUI for an administrator to personalize the system."
          link=""
          sideLeft="false"
        />
        <Project
          src="images/EnviroSearch-one.png"
          alt="Image of Marmik's EnviroSearch project"
          title="EnviroSearch"
          discription="An android app that displays corporations’ environmental footprints. Developed on Android Studio/Java using Google Custom Search JSON API by making RESTful requests through the .NET and JSON libraries. It was a group project for Hack the Valley V."
          link="https://github.com/marmikpatel19/EnviroSearch"
          sideLeft="true"
        />
        <Project
          src="images/BookBees-one.png"
          alt="Image of Marmik's BookBees project"
          title="BookBees"
          discription="A single-page beekeeping application developed using React.js, HTML, and CSS to provide local businesses with an interactive, responsive UI."
          link="https://github.com/marmikpatel19/BookBees"
          sideLeft="false"
        />
      </div>
    </div>
  );
}

export default Projects;
