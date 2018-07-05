import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import BrokenCookie from "../../components/BrokenCookie";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";

class Account extends Component {

    render() {
        return (
        <div>
          <div className="App">
          <NavBar />
          <p className="App-title">Account page! Change me!
            </p>
          <BrokenCookie />
        
          </div>
           <Footer />
         </div>
        );
      }
}

export default Account;