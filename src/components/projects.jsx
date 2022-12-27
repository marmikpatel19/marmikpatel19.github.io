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
          discription="An interactive course detailer for the University of Saskatchewan that shows any course's prerequisites and dependencies. Built using Python, Django, React.js, and MySQL"
          gitlink="https://github.com/relatable-course-visualization/Relatable"
          sideLeft="false"
          id="relatable"
        />
        <Project
          src="images/CarChat.png"
          alt="Image of Marmik Patel's CarChat project"
          title="CarChat"
          discription="A web app that displays trending news, conversations, and videos in the car industry."
          gitlink="https://github.com/marmikpatel19/car-chat"
          sideLeft="true"
          link="https://carchat.netlify.app/"
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
