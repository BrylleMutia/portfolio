import styled from "styled-components";

export const Button = styled.button`
    display: inline-block;
    padding: 6px 30px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: ${props => props.color === "primary" ? "#1c3fa8" : "#047aed"};

    &:hover,
    &:focus {
        transform: scale(0.95);
    }
`

export const Card = styled.div`
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin: 10px;
`