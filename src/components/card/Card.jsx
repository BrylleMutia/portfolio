import React from 'react';

const cardStyle = {
    borderRadius: "10px",
    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    margin: "10px"
}

const Card = (props) => {
    return (
        <div style={{ ...cardStyle, ...props.style }}>
            {props.children}
        </div>
    );
}
 
export default Card;