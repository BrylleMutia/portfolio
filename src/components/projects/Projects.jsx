import React, { useState } from "react";
import { works, works__header, works__container } from "./Projects.module.css";
import { container, flex_row, flex_column } from "../../App.module.css";

import Project from "./project/Project";

import ProjectOne from "./images/Untitled-1.png";
import ProjectTwo from "./images/Untitled-2.png";
import ProjectThree from "./images/Untitled-3.png";
import ProjectFour from "./images/Untitled-4.png";
import ProjectFive from "./images/Untitled-5.png";
import ProjectSix from "./images/Untitled-6.jpg";

import cx from "classnames";

import { IconContext } from "react-icons";

// overwrite global icon styles
const iconStyles = {
  color: "#fff",
  size: "2em",
};

const Projects = () => {
  const [projects] = useState([
    {
      title: "Codebits Blog",
      description: "A fullstack web application for sharing programming and design guides, with dashboard functionalities.",
      image: ProjectTwo,
      link: "http://bit.ly/codebits-blog",
      source: "https://github.com/BrylleMutia/codebits-blog",
    },
    {
      title: "Foodemy",
      description: "A responsive modern landing page made by using CSS layouts and the latest CSS features.",
      image: ProjectFour,
      link: "http://bit.ly/foodemy",
      source: "https://github.com/BrylleMutia/restaurant-landing-page",
    },
    {
      title: "Coviz",
      description: "COVID-19 statistics tracker and visualization tool made with Vue and Quasar.",
      image: ProjectSix,
      link: "http://bit.ly/coviz-19",
      source: "https://github.com/BrylleMutia/covid-stats-visualizer",
    },
    {
      title: "Portfolio v1.0",
      description: "My first portfolio made by taking advantage of CSS animations and client-side routing.",
      image: ProjectFive,
      link: "http://bit.ly/brylle-portfolio",
      source: "https://github.com/BrylleMutia/portfolio-webapp",
    },
    {
      title: "Quizard!",
      description: "Quiz web application made with React and TypeScript, utilizing the Trivia API.",
      image: ProjectThree,
      link: "http://bit.ly/quizard-api",
      source: "https://github.com/BrylleMutia/quizard",
    },
    {
      title: "Todo Today!",
      description: "A classic to-do list web application with multiple user support and authentication through Node.js, Express and MongoDB.",
      image: ProjectOne,
      link: "http://bit.ly/todotoday-mern",
      source: "https://github.com/BrylleMutia/todo-today",
    },
  ]);

  return (
    <IconContext.Provider value={iconStyles}>
      <section className={cx(works, flex_column)} id="projects">
        <h3 className={works__header}>My Past Projects</h3>
        <div className={cx(container, flex_row, works__container)}>
          {projects.map((project, index) => (
            <Project key={index} projectDetails={project} />
          ))}
        </div>
      </section>
    </IconContext.Provider>
  );
};

export default Projects;
