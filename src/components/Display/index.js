import React from "react";
import "./style.css";

function Display(props) {
  return <div className="container">
    <div className="wrapper">{props.children}</div>
  </div>;
}

export default Display;