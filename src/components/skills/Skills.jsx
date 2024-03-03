import React from "react";

import { FaCss3, FaHtml5, FaReact, FaPython, FaFlask } from "react-icons/fa";
import { DiGit } from "react-icons/di";
import { SiRedux, SiFirebase } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiTailwindcss, SiTypescript, SiJavascript } from "react-icons/si";
import { GrOracle } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";

import { Card, CardContent } from "../ui/card";

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
         name: "Tailwind",
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
         name: "NextJS",
         icon: <TbBrandNextjs />,
      },
      {
         name: "Redux",
         icon: <SiRedux />,
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
      <section className="flex flex-col items-center" id="skills">
         <h3 className="mb-10 mt-5 font-pacifico text-[3em] py-7 px-[2em]">
            Skills
         </h3>
         <div className="flex flex-wrap justify-center gap-4 max-w-[1000px]">
            {skillsList.map((tech, index) => (
               <Card
                  key={index}
                  className="transition-all duration-200 hover:translate-y-[-10px]"
               >
                  <CardContent className="flex flex-col items-center justify-center p-4 gap-4">
                     <h3>{tech.name}</h3>
                     <div>{tech.icon}</div>
                  </CardContent>
               </Card>
            ))}
         </div>
      </section>
   );
};

export default Skills;
