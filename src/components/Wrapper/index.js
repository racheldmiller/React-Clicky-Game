import React from "react";

// const Wrapper = props => <div>{props.children}</div>;

function Wrapper(props) {
  return <main className="wrapper">{props.children}</main>;
}

export default Wrapper;
