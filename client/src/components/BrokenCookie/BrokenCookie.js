//stuff for broken cookie component

import React from "react";
import logo2 from './cookie_right_paper.png';
import "./BrokenCookie.css";
import {Link} from "react-router-dom";

const BrokenCookie = (props) => (

    <div className="BrokenCookie">
        <p className="centered">{props.fortune}</p> 
        
    <img className="size2" src={logo2}  alt="logo" />
   
</div>
)
export default BrokenCookie;
