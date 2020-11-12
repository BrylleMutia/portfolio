import React from 'react';
import { project__card, header__card } from "./Card.module.css";

const Card = (props) => {
    const cardStyle = {
        borderRadius: "10px",
        boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
        padding: "20px",
        margin: "10px",
    }

    // for card with background images
    const cardWithImageBackground = props.image ? {
        // background-img overlay
        background: `url(${props.image}), radial-gradient(rgb(175, 175, 175), rgb(138, 138, 138))`,
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    } : null;

    // different media query class for each usage
    const getMediaQueryClass = () => {
        switch(props.element) {
            case "project":
                return project__card;
            case "header":
                return header__card;
            default:
                return;
        }
    }

    return (
        <div style={{ ...cardStyle, ...cardWithImageBackground, ...props.style }} className={getMediaQueryClass()}>
            {props.children}
        </div>
    );
}
 
export default Card;