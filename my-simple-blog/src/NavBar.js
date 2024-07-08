import React from "react";
import {Link} from "react-router-dom";

function NavBar(){
    return (
        <nav>
           <ul>
            <li><Link to="/">Main</Link></li>
            <li><Link to="/"></Link></li>
            <li><Link to="/"></Link></li>
           </ul>
        </nav>
    )
}
export default NavBar;