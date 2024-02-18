import React from "react";

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
         <section
            className="flex flex-col text-center items-center"
            id="projects"
         >
            <h3 className="mt-[2em] mb-2 font-pacifico text-[3em] py-7 px-[2em]">
               Projects
            </h3>
            <p className="mb-10">
               Github:{" "}
               <a
                  href="https://github.com/BrylleMutia"
                  target="_blank"
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
