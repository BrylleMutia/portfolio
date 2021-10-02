import React, { useState } from "react";
import { works, works__header, works__container } from "./Projects.module.css";
import { container, flex_row, flex_column } from "../../App.module.css";

import Project from "./project/Project";

import ProjectOne from "./images/Project-1.png";
import ProjectTwo from "./images/Project-2.png";
import ProjectThree from "./images/Project-3.png";
import ProjectFour from "./images/Project-4.png";
import ProjectFive from "./images/Project-5.png";
import ProjectSix from "./images/Project-6.jpg";
import ProjectSeven from "./images/Project-7.jpg";
import ProjectEight from "./images/Project-8.jpg";

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
      title: "Electro E-commerce",
      description: "An E-commerce platform dedicated for buying and selling Electronic devices. Made with React/Laravel.",
      image: ProjectOne,
      link: "https://bit.ly/electro-v1",
      source: "https://github.com/BrylleMutia/electro-frontend",
    },
    {
      title: "Codebits Blog",
      description: "A fullstack web application for sharing programming and design guides, with dashboard functionalities.",
      image: ProjectTwo,
      link: "http://bit.ly/codebits-blog",
      source: "https://github.com/BrylleMutia/codebits-blog",
    },
    {
      title: "Coviz",
      description: "COVID-19 statistics tracker and visualization tool made with Vue and Quasar.",
      image: ProjectThree,
      link: "http://bit.ly/coviz-19",
      source: "https://github.com/BrylleMutia/covid-stats-visualizer",
    },
    {
      title: "Todo Today!",
      description: "A classic to-do list web application with multiple user support and authentication through Node.js, Express and MongoDB.",
      image: ProjectFour,
      link: "http://bit.ly/todotoday-mern",
      source: "https://github.com/BrylleMutia/todo-today",
    },
    {
      title: "Foodemy",
      description: "A responsive modern landing page made by using CSS layouts and the latest CSS features.",
      image: ProjectFive,
      link: "http://bit.ly/foodemy",
      source: "https://github.com/BrylleMutia/restaurant-landing-page",
    },
    {
      title: "Linear Fence",
      description: "A website dedicated to selling top-quality fences, from vinyl, ornamental, and chain-link fences.",
      image: ProjectSix,
      link: "https://bit.ly/linear-fence",
      source: "https://github.com/BrylleMutia/linear-fence",
    },
    {
      title: "Quizard!",
      description: "Quiz web application made with React and TypeScript, utilizing the Trivia API.",
      image: ProjectSeven,
      link: "http://bit.ly/quizard-api",
      source: "https://github.com/BrylleMutia/quizard",
    },
    {
      title: "Portfolio v1.0",
      description: "My first portfolio made by taking advantage of CSS animations and client-side routing.",
      image: ProjectEight,
      link: "http://bit.ly/brylle-portfolio",
      source: "https://github.com/BrylleMutia/portfolio-webapp",
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
