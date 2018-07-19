
import React, { Component } from "react";
import "./SendButton.css";
class SendButton extends Component {
  state = {
    isOpen: false
    
  };
  onClick = () =>{
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div>
       <button className="btn btn-primary" onClick={this.onClick}>Send</button>
       <textarea className={this.state.isOpen? null:"hidden"} value={"Copy Link to send " + '/Home/' + this.props.fortune}></textarea>
      </div>
    )
  }
}

export default SendButton;