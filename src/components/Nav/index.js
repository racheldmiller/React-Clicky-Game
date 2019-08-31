import React from "react";
import "./style.css";

// FROM BRYAN
const Nav = props => (
  <nav className="navbar fixed-top navbar-dark bg-dark shadow">
    <div className="container-fluid">
      <p className={`col-6 ${props.class}`}>{props.message}</p>
      <p className="col-6">
        Current Score: <span>{props.current}</span> | Highest Score:{" "}
        <span>{props.highest}</span>
      </p>
    </div>
  </nav>
);
// FROM BRYAN

export default Nav;
