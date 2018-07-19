
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
    let x = String(this.props.fortune);
    console.log(x);
    return (
      <div>
        {/*<a className="button" href="mailto:someone@example.com?&subject=A%20Fortune%20For%20You&body='Here is your fortune' + {{x}}!"  target="_top">Send</a> */}
       <button className="button" onClick={this.onClick}>Send</button>
       <textarea className={this.state.isOpen? null:"hidden"} value={this.props.fortune}></textarea>
      </div>
    )
  }
}

export default SendButton;