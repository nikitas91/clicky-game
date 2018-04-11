import React from "react";
import "./Header.css";

const Header = (props) => (
    <div className="jumbotron text-center">
        <h1>Clicky Game!</h1>
        <p>Click on an image to earn points, but don't click on any more than once!</p>
        <p className="message">{props.message}</p>
    </div>
);

export default Header;