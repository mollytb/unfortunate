//stuff for broken cookie component

import React from "react";
import logo2 from './cookie_right_paper.png';
import "./BrokenCookie.css";
import {Link} from "react-router-dom";

const BrokenCookie = (props) => (

    <div className="BrokenCookie">
    <Link to ="/Home">
    -------This is where our fortune will go as of now------
        {props.fortune}
    <img className="size2" src={logo2}  alt="logo" />

    </Link>
    </div>

)
export default BrokenCookie;
