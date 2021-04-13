import React, { useState, useRef, useEffect } from "react";
import { works, works__header, works__links, works__title, works__animate } from "./Projects.module.css";
import { container, flex_row, flex_column } from "../../App.module.css";

import ProjectOne from "../images/portfolio/Untitled-1.png";
import ProjectTwo from "../images/portfolio/Untitled-2.png";
import ProjectThree from "../images/portfolio/Untitled-3.png";
import ProjectFour from "../images/portfolio/Untitled-4.png";
import ProjectFive from "../images/portfolio/Untitled-5.png";
import ProjectSix from "../images/portfolio/Untitled-6.jpg";

import cx from "classnames";

import styled from "styled-components";
import { Card } from "../styled/Styled";

import { IconContext } from "react-icons";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

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

  const animationRef = useRef(null);
  const [isVisible, setIsVisible] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const options = {
    root: null,
    rootMargin: "0px",
    treshold: 1.0,
  };

  useEffect(() => {
    // apply animation class when element is on viewport
    const observer = new IntersectionObserver((entries) => {
      if (entries)
        entries.forEach((entry, index) => {
          console.log(entry);
          setIsVisible((prev) => (prev[index] = entry.isIntersecting));
        });
    }, options);

    if (animationRef.current) observer.observe(animationRef.current);

    return () => {
      if (animationRef.current) observer.unobserve(animationRef.current);
    };
  }, []);

  // for background-image overlay
  const getImageForCard = (img) => `
        background: url(${img}), radial-gradient(rgb(175, 175, 175), rgb(138, 138, 138));
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        & > div:last-of-type {
            display: none;
        }

        &:hover {
            background-blend-mode: multiply;

            & > div:last-of-type {
                display: block;
            }
        }
        
        @media (max-width: 800px) {
            background-blend-mode: multiply;

            & > div:last-of-type {
                display: block;
            }
        }
    `;

  const ProjectsCard = styled(Card)`
    width: 30em;
    height: 16em;
    display: flex;
    flex-direction: column;
    ${(props) => props.image && getImageForCard(props.image)}
  `;

  // overwrite global icon styles
  const iconStyles = {
    color: "#fff",
    size: "2rem",
  };

  return (
    <IconContext.Provider value={iconStyles}>
      <section className={cx(works, flex_column)} id="projects">
        <h3 className={works__header}>My Past Projects</h3>
        <div className={cx(container, flex_row)}>
          {projects.map((project, index) => (
            <div ref={animationRef} className={isVisible && works__animate}>
              <ProjectsCard key={index} image={project.image}>
                <div className={cx(flex_row, works__links)}>
                  <a target="_blank" href={project.source}>
                    <AiFillGithub />
                  </a>
                  <a target="_blank" href={project.link}>
                    <BiLinkExternal />
                  </a>
                </div>
                <div className={works__title}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </ProjectsCard>
            </div>
          ))}
        </div>
      </section>
    </IconContext.Provider>
  );
};

export default Projects;
