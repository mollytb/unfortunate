
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
        <a className="button" href="mailto:someone@example.com?&subject=A%20Fortune%20For%20You&body=Here%20is%20your%20fortune%20!" target="_top">Send</a>
       {/* <button className="btn btn-primary" onClick={this.onClick}>Send</button>
       <textarea className={this.state.isOpen? null:"hidden"} value={"Copy Link to send " + '/Home/' + this.props._id}></textarea> */}
      </div>
    )
  }
}

export default SendButton;