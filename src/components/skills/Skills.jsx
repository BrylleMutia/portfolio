import React, { useState } from 'react';
import { skills, skills__wrapper } from "./Skills.module.css";
import { container, flex_row, flex_column } from "../../App.module.css";

import { FaCss3, FaHtml5, FaJs, FaReact, FaLaravel, FaVuejs, FaPhp } from "react-icons/fa";
import { DiSass, DiGit } from "react-icons/di";
import { SiMaterialUi, SiRedux } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

import { Card } from "../styled/Styled";

import cx from "classnames";

const Skills = () => {
    const [stack] = useState([
        {
            name: "HTML",
            icon: <FaHtml5 />
        },
        {
            name: "CSS",
            icon: <FaCss3 />
        },
        {
            name: "JavaScript",
            icon: <FaJs />
        },
        {
            name: "React",
            icon: <FaReact />
        },
        {
            name: "Redux",
            icon: <SiRedux />
        },
        {
            name: "Vue",
            icon: <FaVuejs />
        },
        {
            name: "PHP",
            icon: <FaPhp />
        },
        {
            name: "SQL",
            icon: <GrMysql />
        },
        {
            name: "Laravel",
            icon: <FaLaravel />
        },
        {
            name: "SASS",
            icon: <DiSass />
        },
        {
            name: "Git",
            icon: <DiGit />
        },
        {
            name: "Material UI",
            icon: <SiMaterialUi />
        },
    ]);

    return (
        <section className={cx(container, flex_column, skills)} id="skills">
            <h3>
                My Current Skills
            </h3>
            <div className={flex_row}>
                {stack.map((tech, index) => (
                    <div key={index} className={skills__wrapper}>
                        <Card key={index} style={{ boxShadow: "0 3px 5px rgba(0, 0, 0, 0.2)", textAlign: "center" }}>
                            <h4>{tech.name}</h4>
                            <div>{tech.icon}</div>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
}
 
export default Skills;