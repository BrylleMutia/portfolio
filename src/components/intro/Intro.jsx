import React from "react";
import { intro } from "./Intro.module.css";

const Intro = () => {
    return (
            <div className={intro}>
                <h3>Hi, I'm Brylle. Nice to meet you!</h3>
                <p>
                    I'm a Fullstack Web Developer. I create things for the web, from a simple "Hello World" project to basically anything you can
                    think of. All we need is your idea!
                </p>
            </div>
    );
};

export default Intro;
