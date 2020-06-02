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
        <Link to="/contact" className="link" tabIndex={tempTabIndex}>
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Navlinks;
