import React from "react";
import "./ClickyImage.css";

const ClickyImage = (props) => (
    <div
        className="thumbnail card"
        style={{backgroundImage: `url('/assets/characters/${props.image}')`}}
        onClick={props.onClick.bind(this, props.id)} />
);

export default ClickyImage;