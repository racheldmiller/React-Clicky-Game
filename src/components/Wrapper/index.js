import React from "react";

// ----------------------- CONTAINER ------------------------------
// This is the container that'll "wrap" everything within it

function Wrapper(props) {
  return <main className="wrapper">{props.children}</main>;
}

export default Wrapper;
