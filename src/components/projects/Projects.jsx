import React from "react";
import "./Projects.css";

import Project from "./project/Project";

import { IconContext } from "react-icons";

// overwrite global icon styles
const iconStyles = {
   color: "#fff",
   size: "2em",
};

const Projects = ({ projects }) => {
   return (
      <IconContext.Provider value={iconStyles}>
         <section className="works flex_column" id="projects">
            <h3 className="works__header">My Past Projects</h3>
            <p style={{ color: "#333" }}>
               Github:{" "}
               <a
                  href="https://github.com/BrylleMutia"
                  target="_blank"
                  style={{ color: "#4895ef" }}
               >
                  https://github.com/BrylleMutia
               </a>
            </p>
            <div className="container flex_row works__container">
               {projects.map((project, index) => (
                  <Project key={index} projectDetails={project} />
               ))}
            </div>
         </section>
      </IconContext.Provider>
   );
};

export default Projects;
