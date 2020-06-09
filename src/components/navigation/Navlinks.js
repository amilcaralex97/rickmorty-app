import React from "react";
import { Link } from "react-router-dom";

const Navlinks = (props) => {
  let tempTabIndex;
  if (props.isMobileLink) {
    tempTabIndex = "-1";
  }
  return (
    <ul className="nav-links">
      <li>
        <Link to="/" className="link" tabIndex={tempTabIndex}>
          Characters
        </Link>
      </li>

      <li>
        <a
          href="https://www.linkedin.com/in/amilcaralex97"
          className="link"
          tabIndex={tempTabIndex}
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Navlinks;
