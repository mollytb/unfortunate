//stuff for NavBar component
import React from "react";
import "./NavBar.css";

const NavBar = () => (
  <nav className="navbar navbar-expand-md navbar-light ">
    <a className="navbar-brand" href="Home">Unfortunate</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Account">Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="CreateFortune">Create</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="SignUp">Sign Up</a>
        </li>
     </ul>
    </div>
</nav>
);

export default NavBar;
