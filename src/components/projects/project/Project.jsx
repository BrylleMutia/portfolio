import React, { useState, useRef, useEffect } from "react";
import { project__links, project__title, project__animate } from "./Project.module.css";
import { flex_row } from "../../../App.module.css";

import styled from "styled-components";
import { Card } from "../../styled/Styled";

import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

import cx from "classnames";

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
  opacity: 0;
  ${(props) => props.image && getImageForCard(props.image)}
`;

export default function Project({ projectDetails }) {
  const animationRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const options = {
    root: null,
    rootMargin: "0px",
    treshold: 1.0,
  };

  useEffect(() => {
    // apply animation class when element is on viewport
    const observer = new IntersectionObserver((entries) => {
      if (entries) {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      }
    }, options);

    if (animationRef.current) observer.observe(animationRef.current);

    return () => {
      if (animationRef.current) observer.unobserve(animationRef.current);
    };
  }, [animationRef, options]);

  return (
      <ProjectsCard ref={animationRef} className={isVisible && project__animate} image={projectDetails.image}>
        <div className={cx(flex_row, project__links)}>
          <a target="_blank" href={projectDetails.source}>
            <AiFillGithub />
          </a>
          <a target="_blank" href={projectDetails.link}>
            <BiLinkExternal />
          </a>
        </div>
        <div className={project__title}>
          <h3>{projectDetails.title}</h3>
          <p>{projectDetails.description}</p>
        </div>
      </ProjectsCard>
  );
}
