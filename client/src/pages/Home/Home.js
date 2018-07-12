import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import Cookie from "../../components/Cookie";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";

class Home extends Component {

    render() {
        return (
        <div>
          <div className="App">
          <NavBar />
          <p className="App-title">Click the cookie...
            </p>
          <Cookie />

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
