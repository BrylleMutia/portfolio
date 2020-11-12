import React, { useState } from 'react';
import { footer, footer__title, footer__links } from "./Footer.module.css";
import { container, flex_row } from "../../App.module.css";

import { IconContext } from "react-icons";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import cx from "classnames";

const Footer = () => {
    const [contacts, setContacts] = useState([
        {
            platform: "Facebook",
            link: "https://www.facebook.com/brylle03",
            icon: <FaFacebook />,
        },
        {
            platform: "Twitter",
            link: "https://www.twitter.com/bryllemutia3",
            icon: <FaTwitter />,
        },
        {
            platform: "Gmail",
            link: "mailto:bryllemutia3@gmail.com",
            icon: <SiGmail />,
        },
        {
            platform: "LinkedIn",
            link: "https://www.linkedin.com/in/isidro-brylle-mutia-526a66163",
            icon: <FaLinkedin />,
        },
    ]);

    // overwrite global icon styles
    const iconStyles = {
        size: "2.5em"
    }

    return (
        <IconContext.Provider value={iconStyles}>
            <footer>
                <div className={footer}>
                    <div className={cx(container, flex_row)} style={{ "--row-justify": "space-around" }}>
                        <div className={footer__title}>
                            <h3>Brylle Mutia <span>/ Web Developer</span></h3>
                            <p>Need a hand? Contact me.</p>
                        </div>
                        <ul className={cx(flex_row, footer__links)}>
                            {contacts.map((contact, index) => (
                                <li key={index}>
                                    <a href={contact.link}>{contact.icon}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </footer>
        </IconContext.Provider>
    );
}
 
export default Footer;