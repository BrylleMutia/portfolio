import React from "react";
import "./Skills.css";

import {
   FaCss3,
   FaHtml5,
   FaReact,
   FaVuejs,
   FaPython,
   FaFlask,
} from "react-icons/fa";
import { DiSass, DiGit } from "react-icons/di";
import { SiRedux, SiFirebase } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiTailwindcss, SiTypescript, SiJavascript } from "react-icons/si";
import { GrOracle } from "react-icons/gr";

import { Card } from "../styled/Styled";

const Skills = () => {
   const skillsList = [
      {
         name: "HTML",
         icon: <FaHtml5 />,
      },
      {
         name: "CSS",
         icon: <FaCss3 />,
      },
      {
         name: "TailwindCSS",
         icon: <SiTailwindcss />,
      },
      {
         name: "JavaScript",
         icon: <SiJavascript />,
      },
      {
         name: "TypeScript",
         icon: <SiTypescript />,
      },
      {
         name: "React",
         icon: <FaReact />,
      },
      {
         name: "Redux",
         icon: <SiRedux />,
      },
      {
         name: "Vue",
         icon: <FaVuejs />,
      },
      {
         name: "Python",
         icon: <FaPython />,
      },
      {
         name: "Flask",
         icon: <FaFlask />,
      },
      {
         name: "Firebase",
         icon: <SiFirebase />,
      },
      {
         name: "SQL",
         icon: <GrMysql />,
      },
      {
         name: "Git",
         icon: <DiGit />,
      },
      {
         name: "Oracle HCM",
         icon: <GrOracle />,
      },
   ];

   return (
      <section className="container flex_column skills" id="skills">
         <h3>My Current Skills</h3>
         <div className="flex_row">
            {skillsList.map((tech, index) => (
               <div key={index} className="skills__wrapper">
                  <Card
                     key={index}
                     style={{
                        boxShadow: "0 3px 5px rgba(0, 0, 0, 0.2)",
                        textAlign: "center",
                     }}
                  >
                     <h4>{tech.name}</h4>
                     <div>{tech.icon}</div>
                  </Card>
               </div>
            ))}
         </div>
      </section>
   );
};

export default Skills;
