import React, { Component } from 'react';
import logo from './fortune_cookie_whole.png';
import './App.css';
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <body className="App-header">
        <header>
          
        </header>
        <div className="Cookie">
          <img src={logo} className="App-logo" alt="logo" />
          </div>
        <p>
        </p>
        </body>
      </div>
    );
  }
}

export default App;
