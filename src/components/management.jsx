import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLink,
  faNewspaper,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";

function Management(props) {
  // Array for second link logos, passing index from props
  const link2logos = [faNewspaper, faBullhorn];

  return (
    <>
      <div className="management" id={props.id}>
        <h1 className="management-title">{props.title}</h1>
        <img className="management-photo" src={props.src} alt={props.alt} />

        <div className="management-text">
          <h3 className="management-time">{props.time}</h3>
          <div className="links">
            <a target="_blank" href={props.link1} id="link1">
              <FontAwesomeIcon icon={faExternalLink} />
            </a>
            <a target="_blank" href={props.link2} id="link2">
              <FontAwesomeIcon icon={link2logos[props.link2LogoIndex]} />
            </a>
          </div>
          <h3 className="management-discription">{props.discription}</h3>
        </div>
      </div>
    </>
  );
}

export default Management;
