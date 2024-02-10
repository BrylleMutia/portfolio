import React from "react";
import "./Footer.css";

import { IconContext } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
   const contacts = [
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
   ];

   // overwrite global icon styles
   const iconStyles = {
      size: "2.5em",
   };

   return (
      <IconContext.Provider value={iconStyles}>
         <footer id="contact">
            <div className="footer">
               <div
                  className="container flex_row"
                  style={{ "--row-justify": "space-around" }}
               >
                  <div className="footer__title">
                     <h3>
                        Brylle Mutia <span> / Web Developer</span>
                     </h3>
                     <p>Got an idea? Let's talk about it.</p>
                  </div>
                  <ul className="flex_row footer__links">
                     {contacts.map((contact, index) => (
                        <li key={index}>
                           <a href={contact.link} target="_blank">
                              {contact.icon}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </footer>
      </IconContext.Provider>
   );
};

export default Footer;
