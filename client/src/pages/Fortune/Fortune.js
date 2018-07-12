import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import BrokenCookie from "../../components/BrokenCookie";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";

class Fortune extends Component {
  state = {
    fortunes: [{}],
    fortune: {},
  };

  componentDidMount() {
    this.loadFortune();
  }

  loadFortune = () => {
    API.getRandomFortune()
      .then(res =>
        this.setState({ fortune: res.data[0] })
      )
      .catch(err => console.log(err));
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
          <p className="App-title">
            </p>
          <BrokenCookie fortune={this.state.fortune.fortune}/>

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
export default Fortune;