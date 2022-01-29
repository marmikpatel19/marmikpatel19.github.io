import React from "react";
import Project from "./project";

function Projects() {
  return (
    <div className="projects">
      <h1 className="section-title">Projects</h1>

      <div className="projects-container">
        <Project
          src="images/-.jpg"
          alt="-"
          title=""
          discription=""
          link=""
          sideLeft="false"
        />
        <Project
          src="images/-.jpg"
          alt="-"
          title=""
          discription=""
          link=""
          sideLeft="true"
        />
        <Project
          src="images/-.jpg"
          alt="-"
          title=""
          discription=""
          link=""
          sideLeft="false"
        />
      </div>
    </div>
  );
}

export default Projects;
