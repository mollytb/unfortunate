import "./SendButton.css";
import React, { Component } from "react";

class SendButton extends Component {
  state = {
    isOpen: false
    
  };
  onClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div>
       <button className="btn btn-primary" onClick={this.onClick}>Send</button>
       <textarea className={this.state.isOpen? null:"hidden"} value={'/Home/' + this.props.fortune._id}></textarea>
      </div>
    )
  }
}

export default SendButton;