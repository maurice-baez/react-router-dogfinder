import React from "react";
import { Link } from "react-router-dom";


/** Nav component.
 * Exists on all pages. renders link to dogList
 *
 *  props: none
 *
 *  state: none
 * 
 * */
function Nav() {
  return (
    <ul>
      <li><Link to="/">Dogs</Link></li>
    </ul>
  );
}
// end

export default Nav;