import React from "react";
import "../styling/aboutme.css";
import { Link } from "react-router-dom";

const titles = [
  "Marmik Patel",
  "a software engineer",
  "an entrepreneur",
  "an environmentalist",
];

const space = "\u00A0";

//&nbsp's for move the introduction text left
function getSpaces() {
  var spaces = [];
  for (var i = 0; i < 37; i++) {
    spaces.push(space);
  }
  return <h1>{spaces}</h1>;
}

function Aboutme() {
  return (
    <>
      <div className="aboutme-container">
        {/*Main image*/}
        <img
          src={"images/aboutme-background.jpg"}
          className="aboutme-photo"
          alt="photo of Marmik Patel"
          width="448px"
        />

        {/*Introduction text*/}
        <h1 className="aboutme-introduction">
          Hey, I'm <strong className="title">Marmik Patel</strong>
          {getSpaces()}
        </h1>

        {/*Discription*/}
        <p className="aboutme-discription">
          A computer science student that applies software engineering to issues
          important to him!
        </p>

        {/*Links/Icons*/}
        <ul className="aboutme-links">
          <a
            target="_blank"
            href="https://github.com/marmikpatel19/marmikpatel19.github.io/tree/Develop/public/marmikpatelresume.pdf"
          >
            <li className="aboutme-link">
              <i class="far fa-file"></i>
            </li>
          </a>

          <a target="_blank" href="https://ca.linkedin.com/in/marmikp">
            <li className="aboutme-link">
              <i class="fab fa-linkedin-in"></i>
            </li>
          </a>

          <a target="_blank" href="https://github.com/marmikpatel19">
            <li className="aboutme-link">
              <i class="fab fa-github"></i>
            </li>
          </a>
        </ul>
      </div>
    </>
  );
}

export default Aboutme;
