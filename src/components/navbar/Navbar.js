import React from "react";
import { navbar, navbar__links } from "./Navbar.module.css";
import { container, flex_row } from "../../App.module.css";

import cx from "classnames";

const Navbar = () => {
    return (
        <nav className={navbar}>
            <div className={cx(container, flex_row)} style={{ "--row-justify": "space-between" }}>
                <h3>Brylle Mutia.</h3>
                <ul className={flex_row}>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Skills</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
