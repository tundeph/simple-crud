import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/add"> Add Employees </Link>
        </li>
        <li>
          <Link to="/show"> Show Employees </Link>{" "}
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
