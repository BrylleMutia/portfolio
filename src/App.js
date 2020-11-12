import React from "react";
import { container, app, grid_row, header, header__grid } from "./App.module.css";

import cx from "classnames";

import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Form from "./components/form/Form";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Card from "./components/card/Card";

import { IconContext } from "react-icons";

function App() {
    const formCardStyle = {
        backgroundColor: "#fff",
        position: "relative",
        top: "100px",
        zIndex: 100,
        flexBasis: "30%",
        padding: "1.5em",
        marginRight: "3em",
    };

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
                        <Card element="header" style={formCardStyle}>
                            <Form />
                        </Card>
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
