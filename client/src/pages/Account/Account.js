import React, { Component } from "react";
import NavBar from "../../components/NavBar";

import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
import {Link} from "react-router-dom"
class Account extends Component {

  render() {
    return (
      <div>
        <div className="App">
          <NavBar />
          <p className="App-title"></p>
            
          <div>
          <Link to ="/CreateFortune">
          <div className="card">
              <h5 className="card-header">Click here to create your own fortune</h5>
            </div>
            </Link>
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
          </div>
          </div>
          <Footer />
        </div >
        );
      }
    }
    
export default Account;