import React from "react";
import "./style.css";

// -------------------------------- NAVBAR -------------------------------

function Nav(props) {
  return (
    <nav className="nav">
      {/* Bring users back to landing page */}
      <div className="game-brand">
        <a href="/">CLICKY GAME!</a>
      </div>

      {/* Display current score vs. the highest score obtained */}
      <div className="stats">
        Current Score: {props.score} | Highest Score: {props.highscore}
      </div>
    </nav>
  );
}

export default Nav;
