import React from "react";
import "./style.css";

// -------------------------------- NAVBAR -------------------------------

function Nav(props) {
  return (
    <nav className="nav">
      <div className="game-brand">
        <a href="/">CLICKY GAME!</a>
      </div>
      <div className="stats">
        Current Score: {props.score} | Highest Score: {props.highscore}
      </div>
    </nav>
  );
}

export default Nav;
