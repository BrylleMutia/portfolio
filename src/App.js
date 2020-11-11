import React from "react";
import { container, app, grid_row, header, header__grid } from "./App.module.css";

import cx from "classnames";

import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Form from "./components/form/Form";
import Skills from "./components/skills/Skills";

import Card from "./components/card/Card";
import Projects from "./components/projects/Projects";

function App() {
    const formCardStyle = {
        backgroundColor: "#fff",
        position: "relative",
        top: "100px",
        zIndex: 100,
        flexBasis: "30%",
        padding: "1.5em",
        marginRight: "3em"
    };

    return (
        <div className={app}>
            <Navbar />
            <div className={header}>
                <div className={cx(container, grid_row, header__grid)} style={{ "--row-justify": "space-between" }}>
                    <Intro />
                    <Card style={formCardStyle}>
                        <Form />
                    </Card>
                </div>
            </div>
            <Skills />
            <Projects />
        </div>
    );
}

export default App;
