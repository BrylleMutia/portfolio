import React from "react";
import { container, app, grid_row, header, header__grid, header__animate } from "./App.module.css";

import cx from "classnames";

import Navbar from "./components/navbar/Navbar";
import AnimateJson from "./components/animateJson/AnimateJson";
import Intro from "./components/intro/Intro";
import Form from "./components/form/Form";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

import animation_1 from "./components/animations/animate_1.json";

import styled from "styled-components";
import { Card } from "./components/styled/Styled";

import { IconContext } from "react-icons";


const HeaderCard = styled(Card)`
  background-color: #fff;
  position: relative;
  top: 80px;
  z-index: 10;
  flex-basis: 30%;
  height: 330px;
  width: 280px;

  @media (max-width: 800px) {
    margin: 0 7em;
    top: 0;
    justify-self: center;
  }

  @media (max-width: 600px) {
    margin: 0 4em;
  }

  @media (max-width: 450px) {
    margin: 0 2em;
  }
`;

// global styling config for react-icons
const iconGlobalStyles = {
  color: "#047aed",
  size: "5em",
};

function App() {
  return (
    <IconContext.Provider value={iconGlobalStyles}>
      <div className={app}>
        <Navbar />
        <div className={header}>
          <div className={cx(container, grid_row, header__grid)} style={{ "--row-justify": "space-between" }}>
            <Intro />
            <HeaderCard className={header__animate}>
              <Form />
            </HeaderCard>
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
          <path
            fill="#047aed"
            fillOpacity="1"
            d="M0,128L48,117.3C96,107,192,85,288,69.3C384,53,480,43,576,58.7C672,75,768,117,864,144C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>

        <AnimateJson animate={animation_1} />

        <Skills />
        <Projects />
        <Footer />
      </div>
    </IconContext.Provider>
  );
}

export default App;
