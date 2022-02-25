import React from "react";
import Experience from "./experience";
import "../styling/experiences.css";

function Experiences() {
  return (
    <div className="experiences" id="experiences-routing">
      <h1 className="experiences-section-title">Experiences & Education</h1>

      <Experience
        title="Robotics Course Developer & Instructor @ Infokidz Academy"
        time="2017"
        bullet1="Architected a robotics course using a visual programming language and robots, structuring 23 activities."
        bullet2="Taught six students by practicing strong communication and analytical skills, receiving outstanding student-parent satisfaction."
      />
    </div>
  );
}

export default Experiences;
