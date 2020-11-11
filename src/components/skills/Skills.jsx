import React, { useState } from 'react';
import { skills, skills__wrapper } from "./Skills.module.css";
import { container, flex_row, flex_column } from "../../App.module.css";

import Card from "../card/Card";

import cx from "classnames";

const Skills = () => {
    const [stack, setStack] = useState([
        {
            name: "HTML5"
        },
        {
            name: "CSS3"
        },
        {
            name: "JavaScript"
        },
        {
            name: "React"
        },
        {
            name: "Node.js"
        },
        {
            name: "Express"
        },
        {
            name: "MongoDB"
        },
        {
            name: "SASS"
        },
        {
            name: "Git"
        },
        {
            name: "Material UI"
        },
    ]);

    return (
        <section className={cx(container, flex_column, skills)}>
            <h3>
                My Current Skills
            </h3>
            <div className={flex_row}>
                {stack.map((tech, index) => (
                    <div className={skills__wrapper}>
                        <Card key={index} style={{ boxShadow: "0 3px 5px rgba(0, 0, 0, 0.2)" }}>
                            <h4>{tech.name}</h4>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
}
 
export default Skills;