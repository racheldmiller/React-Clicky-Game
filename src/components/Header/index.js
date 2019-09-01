import React from "react";
import "./style.css";

function Header() {
  return (
    <div>
      <header className="header">
        <h1>Spongebob Clicky Game!</h1>
        <h2>
          Earn up to 9 pts. by clicking on an image you HAVEN'T already clicked.
          Good luck!
        </h2>
      </header>
    </div>
  );
}

export default Header;
