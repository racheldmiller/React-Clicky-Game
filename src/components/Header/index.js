// ------------------------- BASICALLY, A JUMBOTRON -----------------------------

import React from "react";
import "./style.css";

function Header() {
  return (
    <div>
      <header className="header">
        <h1>Clicky Game: Spongebob Edition</h1>
        <h2>
          How good is your memory? Put it to the test! Earn up to 10 points by
          clicking on an image you HAVEN'T already clicked. Good luck!
        </h2>
      </header>
    </div>
  );
}

export default Header;
