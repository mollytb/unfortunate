//stuff for FortuneText component
import React from "react";
import "./FortuneText.css";

const FortuneText = props => (
  <ul className="">
    <li>{props.fortune}</li>
  </ul>
);

export default FortuneText;
