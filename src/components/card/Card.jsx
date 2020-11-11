import React from 'react';


const Card = (props) => {
    const cardStyle = {
        borderRadius: "10px",
        boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
        padding: "20px",
        margin: "10px",
        height: "100%"
    }

    const cardWithImageBackground = props.image ? {
        background: `url(${props.image}), radial-gradient(rgb(175, 175, 175), rgb(138, 138, 138))`,
        backgroundSize: "cover",
        "background-blend-mode": "multiply",
        "background-repeat": "no-repeat",
    } : null;

    return (
        <div style={{ ...cardStyle, ...cardWithImageBackground, ...props.style }}>
            {props.children}
        </div>
    );
}
 
export default Card;