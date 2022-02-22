import React, { useEffect, useRef } from "react";
import "../styling/aboutme.css";
import { init } from "ityped";

const asd = [
  "Marmik Patel",
  "a software engineer",
  "an entrepreneur",
  "an environmentalist",
];

//const space = "\u00A0";

const introduction = "Hey,\n";

//&nbsp's for move the introduction text left
/*
function getSpaces() {
  var spaces = [];
  for (var i = 0; i < 0; i++) {
    spaces.push(space);
  }
  return <h1>{spaces}</h1>;
}*/

function Aboutme() {
  const titles = useRef();

  //ityped animation
  useEffect(() => {
    init(titles.current, {
      showCursor: false,
      backDelay: 950,
      backSpeed: 40,
      showCursor: true,
      strings: [
        "Marmik Patel",
        "a software engineer",
        "an entrepreneur",
        "an environmentalist",
      ],
    });
  }, []);

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
          {introduction}
          <span className="im">I'm </span>
          <strong className="title">
            <span ref={titles}></span>
          </strong>
        </h1>

        {/*Discription*/}
        <p className="aboutme-discription">
          A CS student that leverages software engineering to develop impactful
          solutions!
        </p>

        {/*Links/Icons*/}
        <ul className="aboutme-links">
          <a
            target="_blank"
            href="https://github.com/marmikpatel19/marmikpatel19.github.io/public/MarmikPatelResume.pdf"
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
