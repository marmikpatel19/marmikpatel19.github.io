import React from "react";
import "../styling/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="footer">
        {/*Links/Icons*/}
        <ul className="footer-links">
          <a
            className="footer-link"
            target="_blank"
            href="https://github.com/marmikpatel19/marmikpatel19.github.io/public/marmikpatelresume.pdf"
          >
            <li className="footer-icon">
              <FontAwesomeIcon icon={faFile} />
            </li>
          </a>

          <a
            className="footer-link"
            target="_blank"
            href="https://ca.linkedin.com/in/marmikp"
          >
            <li className="footer-icon">
              <FontAwesomeIcon icon={faGithub} />
            </li>
          </a>

          <a
            className="footer-link"
            target="_blank"
            href="https://github.com/marmikpatel19"
          >
            <li className="footer-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </li>
          </a>

          <a
            className="footer-link"
            target="_blank"
            href="mailto:marmikpatel19[at]gmail.com"
          >
            <li className="footer-icon" id="email">
              <FontAwesomeIcon icon={faEnvelope} />
            </li>
          </a>
        </ul>
      </div>
    </>
  );
}

export default Footer;
