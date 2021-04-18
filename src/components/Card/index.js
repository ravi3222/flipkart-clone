import React from "react";
import "./styles.scss";

function Card(props) {
  return (
    <div {...props} className="card">
      <div className="cardHeader">
        {props.headerLeft && <div>{props.headerLeft}</div>}
        {props.headerRight && props.headerRight}
      </div>
      {props.children}
    </div>
  );
}

export default Card;
