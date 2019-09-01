import React from "react";
import "./style.css";

// -------------------------------- NAVBAR -------------------------------
const Nav = props => (
  <nav className="nav">
    {/* Have a landing page link */}
    <div className="game-brand">
      <a href="/">CLICKY GAME!</a>
    </div>
    <div className="scores">
      Current Score: {props.score} | Highest Score: {props.highscore}
    </div>
  </nav>
);

export default Nav;
