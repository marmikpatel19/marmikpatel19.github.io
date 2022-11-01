import React from "react";
import Experience from "./experience";
import "../styling/experiences.css";

function Experiences() {
  return (
    <div className="experiences" id="experiences-routing">
      <h1 className="experiences-section-title">Experiences & Education</h1>

      <Experience
        title="Software Developer Intern @ Infokidz Academy"
        time="May 2022 - Aug 2022"
        bullet1={
          "Developed a full-stack web application serving as the public business website. See the source code"
        }
        bullet2="Worked with the MERN stack, AWS, and Google OAuth 2.0"
      />
    </div>
  );
}

export default Experiences;
