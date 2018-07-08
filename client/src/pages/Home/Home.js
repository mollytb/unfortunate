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
          <p className="App-title">Create your own...
            </p>
          <Input />
          <FormBtn />
          </div>
           <Footer />
         </div>
        );
      }
}

export default Home;
