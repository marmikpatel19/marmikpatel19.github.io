import React from "react";

function Project(props) {
  /*Assigning classes depending on the side that the project resides on*/
  var isTrueSet = props.sideLeft === "true";
  var photo;
  var text;
  isTrueSet ? (photo = "project-photo") : (photo = "project-photo-right");
  isTrueSet ? (text = "text") : (text = "text-right");

  return (
    <div className="project" id={props.id}>
      <img className={photo} src={props.src} alt={props.alt} />
      <div className={text}>
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
