import React from "react";

function Project(props) {
  /* Use a ternary operator to name a class depending on the value of props.sideLeft, adding different
    css styling depending on the class */

  return (
    <div className="project" id={props.id}>
      <img className="project-photo" src={props.src} alt={props.alt} />
      <div className="text">
        <h1 className="project-title">{props.title}</h1>
        <h3 className="project-discription">{props.discription}</h3>
        <a target="_blank" href={props.gitlink} id="link1">
          <i class="fab fa-github"></i>
        </a>
        <a target="_blank" href={props.link} id="link2">
          <i class="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  );
}

export default Project;
