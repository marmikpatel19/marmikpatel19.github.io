import React from "react";

function Project(props) {
  /* Use a ternary operator to name a class depending on the value of props.sideLeft, adding different
    css styling depending on the class */

  return (
    <div className="project">
      <img className="project-photo" src={props.src} alt={props.alt} />
      <h1 className="project-title">{props.title}</h1>
      <h3 className="project-discription">{props.discription}</h3>
      <a target="_blank" href={props.link}>
        <i class="fab fa-github"></i>
      </a>
    </div>
  );
}

export default Project;
