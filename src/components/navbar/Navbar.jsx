import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container flex_row navbar__links" style={{ "--row-justify": "space-between", "--row-wrap": "nowrap" }}>
                <h3>BM.</h3>
                <ul className="flex_row">
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
