//stuff for broken cookie component

import React from "react";
import logo2 from './cookie_right_paper.png';
import "./BrokenCookie.css"

const BrokenCookie = (props) => (
    <div className="BrokenCookie">
    -------This is where our fortune will go as of now------
        {props.fortune}
    <img className="size2" src={logo2}  alt="logo" />
    </div>
)
export default BrokenCookie;