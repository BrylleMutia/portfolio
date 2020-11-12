import React, { useState } from 'react'
import { works, works__header } from "./Projects.module.css";
import { container, flex_row, flex_column } from "../../App.module.css";

import ProjectOne from "../images/portfolio/Untitled-1.png";
import ProjectTwo from "../images/portfolio/Untitled-2.png";
import ProjectThree from "../images/portfolio/Untitled-3.png";
import ProjectFour from "../images/portfolio/Untitled-4.png";

import cx from "classnames";
import Card from '../card/Card';

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            title: "Todo Today!",
            description: "A classic to-do list web application with multiple user support and authentication.",
            image: ProjectOne,
            link: "http://bit.ly/todotoday-mern",
            source: "http://bit.ly/todotoday-github"
        },
        {
            title: "Quizard!",
            description: "A classic to-do list web application with multiple user support and authentication.",
            image: ProjectTwo,
            link: "http://bit.ly/todotoday-mern",
            source: "http://bit.ly/todotoday-github"
        },
        {
            title: "Foodemy",
            description: "A classic to-do list web application with multiple user support and authentication.",
            image: ProjectThree,
            link: "http://bit.ly/todotoday-mern",
            source: "http://bit.ly/todotoday-github"
        },
        {
            title: "Portfolio v1.0",
            description: "A classic to-do list web application with multiple user support and authentication.",
            image: ProjectFour,
            link: "http://bit.ly/todotoday-mern",
            source: "http://bit.ly/todotoday-github"
        },
    ]);
    
    return (
        <section className={cx(works, flex_column)}>
            <h3 className={works__header}>My Past Projects</h3>
            <div className={cx(container, flex_row)}>
                {projects.map((project, index) => (
                        <Card key={index} image={project.image} style={{ width: "30em", height: "16rem" }}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </Card>
                ))}
            </div>
        </section>
    );
}
 
export default Projects;