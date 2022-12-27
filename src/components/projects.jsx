import React from "react";
import Project from "./project";
import "../styling/projects.css";

function Projects() {
  return (
    <div className="projects" id="projects-routing">
      <h1 className="projects-section-title">Projects</h1>

      <div className="projects-container">
        <Project
          src="images/Relatable.png"
          alt="Image of Marmik Patel's Relatable project"
          title="Relatable"
          discription="An interactive course detailer for the University of Saskatchewan. A user searches for a course, and the application displays its prerequisites, dependencies, and other useful information."
          gitlink="https://github.com/relatable-course-visualization/Relatable"
          sideLeft="false"
          id="relatable"
        />
        <Project
          src="images/BookBees-one.png"
          alt="Image of Marmik Patel's BookBees project"
          title="BookBees"
          discription="An interactive, responsive beekeeping UI built using React.js, HTML, and CSS."
          gitlink="https://github.com/marmikpatel19/BookBees"
          sideLeft="true"
          link="https://sad-lamport-370283.netlify.app/"
          id="bookbees"
        />
        <Project
          src="images/Student-Residence-System.png"
          alt="Image of Marmik Patel's Student Residence System project"
          title="Student Residence System"
          discription="A Java object-oriented university residence system. Constructed through six application versions, various software design patterns, and a GUI."
          gitlink=""
          sideLeft="false"
          id="student"
        />
      </div>
    </div>
  );
}

export default Projects;
