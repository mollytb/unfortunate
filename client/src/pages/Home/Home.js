import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import Cookie from "../../components/Cookie";
import Footer from "../../components/Footer";
import {Link} from "react-router-dom";

class Home extends Component {

    render() {
        return (
        <div>
          <div className="App">
          <NavBar />

          <p className="App-title">Click the cookie...
            </p>
            <Link to ="/Fortune">
          <Cookie />
          </Link>
        <div>
        </div>
          <div>
            <Footer />
          </div>
         </div>
       </div>
        );
      }
}

export default Home;
