import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import API from "../../utils/API";
import Footer from "../../components/Footer";
import { Input, FormBtn } from "../../components/Form";
import Modal from "../../Modal"

class CreateFortune extends Component {
    state = {
        fortunes: [],
        fortune: "",
        user: "",
        showModal: false
    };
    componentDidMount () {
        this.loadFortune();
    };
    loadFortune = (id) => {
        API.getFortune(id)
        .then(res => this.setState({ fortune: res.data }))
        .catch(err=> console.log(err));
    };
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
    handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.fortune && this.state.user) {
        var inputs = {
          fortune: this.state.fortune,
          user: this.state.user
        }
        this.setState.fortune = "";
        this.setState.user = "";
        API.saveFortune(inputs)
          .then(res => this.setState({showModal: true}))
          .catch(err => console.log(err));
      }
    };

    // Required by modal. Passed as prop.
    onModalClose = () => {
      this.setState({
        showModal: false
      })
    }
    render () {
        return (
          <div>
            <div>
                <NavBar />
            </div>
            <div>
              <p className="App-title">Create your own...</p>
              <div className="card">
                <h5 className="card-header">Create new Unfortune</h5>
                {this.state.showModal ? <Modal onClose={this.onModalClose}
                fortune={this.state.fortune} show={this.state.showModal} /> :
                  <form>
                    <div className="form-group card-body">
                      <p className="card-text">Username</p>
                      <Input
                        value={this.state.user}
                        onChange={this.handleInputChange}
                        name="user"
                        placeholder="username (required)"
                      />
                    </div>
                    <div className="card-body">
                      <p className="card-text">Fortune text</p>
                      <Input
                        value={this.state.fortune}
                        onChange={this.handleInputChange}
                        name="fortune"
                        placeholder="Some cynical wit (required)"
                        />
                    </div>
                    <FormBtn
                      disabled={!(this.state.fortune)}
                      onClick={this.handleFormSubmit}>
                      Submit Fortune
                    </FormBtn>
                  </form>
                }
                </div>
              </div>
          <Footer />
          </div>
        );
    }
}
export default CreateFortune;
