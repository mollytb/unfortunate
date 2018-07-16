//stuff for cookie component
import React from "react";
import logo from './fortune_cookie_whole.png';
import "./Cookie.css";
import {Link} from "react-router-dom";

const Cookie = props => (
    <div className="Cookie">
    <span className="fortune-btn" >
    
    <img className="size" src={logo}  alt="logo" />
   
    
   </span>
    </div>

)
export default Cookie;
