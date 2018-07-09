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
          <div>
            <div className="card">
              <h5 className="card-header">Favorite Unfortunes</h5>
              <div className="card-body">
                <p className="card-text">Dynamically add favortied fortunes??</p>
              </div>
            </div>
          </div>
          <p>Create a New Unfortune? Is that going on this page at all?</p>
          <p>Your Unfortunes</p>
      </div>
      <Footer />
      </div >
    );
  }
}

export default Account;