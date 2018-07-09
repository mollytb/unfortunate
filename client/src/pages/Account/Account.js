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
            <form>

              <div className="form-group card-body">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
              </div>
                <div className="form-group card-body">
                  <label for="exampleFormControlTextarea1">Example textarea</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

            </form>
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