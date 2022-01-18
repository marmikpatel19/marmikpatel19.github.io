import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

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
            <li className="navbar-item">
              <Link
                to="/projects"
                className="navbar-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/experiences"
                className="navbar-links"
                onClick={closeMobileMenu}
              >
                Experiences & Education
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/management"
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
