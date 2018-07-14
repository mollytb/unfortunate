import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import BrokenCookie from "../../components/BrokenCookie";
import Footer from "../../components/Footer";
import API from "../../utils/API";


class Fortune extends Component {
  state = {
    fortunes: [{}],
    fortune: "",
  };

  componentDidMount() {
    this.loadFortune();
  }

  loadFortune = () => {
    API.getRandomFortune()
      .then(res =>{
        console.log(res.data)
        this.setState({ fortune: res.data.fortune })
      })
      .catch(err => console.log("problem with API call getRandomFortune"));
  };

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
        return (
        <div>
          <div className="App">
            <NavBar />
            <p className="App-title"></p>
            <BrokenCookie fortune={this.state.fortune}/>
          </div>
          <div>
            <Footer />
          </div>
         </div>
  
        );
      }
}
export default Fortune;
