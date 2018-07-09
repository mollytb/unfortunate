//stuff for NavBar component
import React from "react";
import "./NavBar.css";

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light ">
    <a className="navbar-brand" href="#">Unfortunate</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="../pages/Home">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Account <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Create <span className="sr-only">(current)</span></a>
        </li>
     </ul>
    </div>
</nav>
);

export default NavBar;
