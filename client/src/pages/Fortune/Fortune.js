import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import BrokenCookie from "../../components/BrokenCookie";

import SendButton from "../../components/SendButton";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import {Link} from "react-router-dom";

class Fortune extends Component {
  state = {
    fortunes: [{}],
    fortune: "",
    _id: ""
  };

  componentDidMount() {
    var url = window.location.href;

    var regex = /[?&]([^=#]+)=([^&#]*)/g,
      params = {},
      match;
    while (match = regex.exec(url)) {
      params[match[1]] = match[2];
}
    console.log(params)
    if (params === 5 ) {
    this.loadSpecificFortune();}
    else {
    this.loadRandomFortune();
    }
  }

  loadRandomFortune = () => {
    API.getRandomFortune()
      .then(res =>{
        console.log(res.data)
        this.setState({ fortune: res.data.fortune, _id: res.data._id })
      })
      .catch(err => console.log("problem with API call getRandomFortune"));
  };
  loadSpecificFortune = (id) => {
    API.getFortune()
    .then(res =>{
      console.log(res.data)
      this.setState({ fortune: res.data.fortune, id: res.data.id })
    })
    .catch(err => console.log("problem with API call getSpecificFortune"));

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.fortune) {
      API.saveFortune({
        fortune: this.state.fortune
      })
        .then(res => this.loadFortune())
        .catch(err => console.log(err));
    }
  };

    render() {
      //console.log(this.state.fortune["_id"])
        return (
          <div>
            <div className="App">
              <NavBar />
                <p className="App-title"></p>
                <Link to ="/Home">
                <BrokenCookie fortune={this.state.fortune}/>
                </Link>
               
                <SendButton _id={this.state._id}/>
                {/* <a href="mailto:someone@example.com?&subject=A%20Fortune%20For%20You&body=Here%20is%20your%20fortune%20!" target="_top">Send</a> */}
              <div>
                <Footer />
              </div>
            </div>
         </div>

        );
      }
}
export default Fortune;
