import React from "react";

function Experience(props) {
  return (
    <div className="experience">
      <h1 className="experience-title">{props.title}</h1>
      <h3 className="experience-time">{props.time}</h3>
      <h3 className="experience-bullet1">{props.bullet1}</h3>
      <h3 className="experience-bullet1">{props.bullet2}</h3>
    </div>
  );
}

export default Experience;
