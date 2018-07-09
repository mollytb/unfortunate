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
            <div className="card">
              <h5 className="card-header">Your Unfortunes</h5>
              <div className="card-body">
                <p className="card-text">Fortunes you've created will display here</p>
              </div>
            </div>

            <div className="card">
            <h5 className="card-header">Create new Unfortune</h5>
       
            <p>add button and connect FormBtn here?? </p>
            </div>
          </div>
          </div>
          <Footer />
        </div >
        );
      }
    }
    
export default Account;