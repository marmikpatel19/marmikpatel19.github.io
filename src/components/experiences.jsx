import React from "react";
import Experience from "./experience";
import "../styling/experiences.css";

function Experiences() {
  return (
    <div className="experiences" id="experiences-routing">
      <h1 className="experiences-section-title">Experiences & Education</h1>

      <Experience
        title="Software Developer Intern @ Infokidz Academy"
        time="May 2022 - Present"
        bullet1="Architecting the company's front-end using React.js"
        bullet2="Developing a back-end management system"
      />
    </div>
  );
}

export default Experiences;
