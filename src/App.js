import React from "react";
import { container, app, flex_row, header, header__card } from "./App.module.css";

import cx from "classnames";

import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Form from "./components/form/Form";

import Card from "./components/card/Card";

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
                <div className={cx(container, flex_row)} style={{ "--row-justify": "space-between" }}>
                    <Intro />
                    <Card style={formCardStyle}>
                        <Form />
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default App;
