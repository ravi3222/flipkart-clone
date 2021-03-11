import React from "react";
import "./styles.scss";

function Card(props) {
  return (
    <div {...props} className="card">
      {props.children}
    </div>
  );
}

export default Card;
