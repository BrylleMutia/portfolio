import React from "react";
import "./Navbar.css";

const Navbar = () => {
   return (
      <nav className="navbar">
         <div
            className="container navbar__links flex justify-end"
            style={{ "--row-justify": "space-between", "--row-wrap": "nowrap" }}
         >
            <ul className="flex justify-center items-center">
               <li>
                  <a href="#skills">Skills</a>
               </li>
               <li>
                  <a href="#projects">Projects</a>
               </li>
               <li>
                  <a href="#contact">Contact</a>
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;
