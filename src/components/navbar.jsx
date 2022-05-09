import React, { useState } from "react";
import "../styling/navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  /*menu toggle button */
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  /*close the menu in mobile view when an page is clicked*/
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/*navbar toggle*/}
          <div className="navbar-toggle" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "navbar-menu active" : "navbar-menu"}>
            <li className="navbar-item" id="experiences">
              <Link
                to="experiences-routing"
                smooth={true}
                duration={1000}
                offset={-80}
                className="navbar-links"
                onClick={closeMobileMenu}
              >
                Experiences & Education
              </Link>
            </li>
            <li className="navbar-item" id="projects">
              <Link
                to="projects-routing"
                smooth={true}
                duration={800}
                offset={-80}
                className="navbar-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className="navbar-item" id="management">
              <Link
                to="managementExps-routing"
                smooth={true}
                duration={1000}
                offset={-80}
                className="navbar-links"
                onClick={closeMobileMenu}
              >
                Management & Environmentalism
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
