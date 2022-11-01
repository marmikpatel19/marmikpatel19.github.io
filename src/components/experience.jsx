import React from "react";

function Experience(props) {
  return (
    <div className="experience">
      <h1 className="experience-title">{props.title}</h1>
      <h3 className="experience-time">{props.time}</h3>
      <ul>
        <li>
          <h3 className="experience-bullets">
            {props.bullet1}{" "}
            <a
              href="https://github.com/Infokidz-Academy/Infokidz-Academy-Website"
              target="_blank"
            >
              here
            </a>
          </h3>
        </li>
        <li>
          <h3 className="experience-bullets">{props.bullet2}</h3>
        </li>
      </ul>
    </div>
  );
}

export default Experience;
