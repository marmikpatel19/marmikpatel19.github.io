import React from "react";
import "../styling/experiences.css";
import "../styling/education.css";

function Education() {
  return (
    <>
      <hr></hr>

      <div className="education">
        {/*Education One*/}
        <h1 className="university">University of Saskatchewan</h1>
        <h2 className="timeline">Sep. 2021 - Present</h2>
        <h2 className="degree">Bachelor of Science, Computer Science</h2>

        {/*Education Two*/}
        <h1 className="university">University of Toronto</h1>
        <h2 className="timeline">Sep. 2020 - Aug. 2021</h2>
        <h2 className="degree">
          Bachelor of Science (incomplete), Computer Science, Mathematics, Statistics
        </h2>
      </div>
    </>
  );
}

export default Education;
