import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav className="navbar navbar-clicky navbar-fixed-top">
        <div className="container-fluid">
            <ul className="navbar-clicky-menu">
                <li><a className="clicky-brand" href="/">Clicky Game!</a></li>
                <li>{props.message}</li>
                <li>Score: {props.score} | Top Score: {props.topScore}</li>
            </ul>
        </div>
    </nav>
);

export default Nav;