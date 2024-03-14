import React from "react";

import Project from "./project/Project";
import HeaderIcon from "../../assets/header-icon.svg";

import { IconContext } from "react-icons";

// overwrite global icon styles
const iconStyles = {
   color: "#fff",
   size: "2em",
};

const Projects = ({ projects }) => {
   return (
      <IconContext.Provider value={iconStyles}>
         <section
            className="flex flex-col text-center items-center"
            id="projects"
         >
            <h3 className="mt-[3em] font-poppins font-bold flex items-center text-[2.2em] py-7 px-[2em]">
               <img src={HeaderIcon} alt="header-icon" className="mr-4" />{" "}
               Projects
            </h3>
            <p className="mb-10">
               Github:{" "}
               <a
                  href="https://github.com/BrylleMutia"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500"
               >
                  https://github.com/BrylleMutia
               </a>
            </p>
            <div className="container flex_row overflow-hidden text-white px-0">
               {projects.map((project, index) => (
                  <Project key={index} projectDetails={project} />
               ))}
            </div>
         </section>
      </IconContext.Provider>
   );
};

export default Projects;
