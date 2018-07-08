import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import Cookie from "../../components/Cookie";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";

class Home extends Component {
  state = {
    fortunes: [],
    fortune: "",
  };

  componentDidMount() {
    this.loadFortune();
  }

  loadFortune = () => {
    API.getFortune()
      .then(res =>
        this.setState({fortunes: res.data, fortune:"" })
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
          <p className="App-title">Click the cookie...
            </p>
          <Cookie />
          <p className="App-title">Create your own...
            </p>
        <div>
          <form>
            <Input
              value={this.state.fortune}
              onChange={this.handleInputChange}
              name="fortune"
              placeholder="Some cynical wit (required)"
              />
            <FormBtn
              disabled={!(this.state.fortune)}
              onClick={this.handleFormSubmit}
              >
                Submit Fortune
              </FormBtn>
          </form>
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
