import React from 'react';
import { btn } from "./Button.module.css";


const Button = (props) => {
    const buttonStyle = {
        display: "inline-block",
        padding: "6px 30px",
        cursor: "pointer",
        border: "none",
        borderRadius: "5px",
        color: "#fff",
        backgroundColor: props.color === "primary" ? "var(--color-primary)" : "var(--color-secondary)",
    };

    return (
        <button style={{ ...buttonStyle, ...props.style}} {...props} className={btn}>{props.children}</button>
    );
}

export default Button;