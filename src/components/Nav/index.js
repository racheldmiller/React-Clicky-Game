import React from "react";
import "./style.css";

const Nav = props => (
  <div className="navbar">
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score} | Highscore: {props.highscore}
    </div>
  </div>
);

// NEED TO DOUBLE CHECK
// const Nav = props => (
//   <nav className="navbar fixed-top navbar-dark bg-dark shadow">
//     <div className="container-fluid">
//       <p className={`col-6 ${props.class}`}>{props.message}</p>
//       <p className="col-6">
//         Current Score: <span>{props.current}</span> | Highest Score:{" "}
//         <span>{props.highest}</span>
//       </p>
//     </div>
//   </nav>
// );
// NEED TO DOUBLE CHECK

export default Nav;
