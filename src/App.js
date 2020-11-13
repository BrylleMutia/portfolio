import React from "react";
import { container, app, grid_row, header, header__grid } from "./App.module.css";

import cx from "classnames";

import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Form from "./components/form/Form";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

import styled from "styled-components";
import { Card } from "./components/styled/Styled";

import { IconContext } from "react-icons";

function App() {
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
        size: "5em"
    }

    return (
        <IconContext.Provider value={iconGlobalStyles}>
            <div className={app}>
                <Navbar />
                <div className={header}>
                    <div className={cx(container, grid_row, header__grid)} style={{ "--row-justify": "space-between" }}>
                        <Intro />
                        <HeaderCard>
                            <Form />
                        </HeaderCard>
                    </div>
                </div>
                <Skills />
                <Projects />
                <Footer />
            </div>
        </IconContext.Provider>
    );
}

export default App;
