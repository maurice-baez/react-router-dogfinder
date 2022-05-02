import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/dogs">Dogs</Link></li>
    </ul>
  );
}
// end

export default Nav;