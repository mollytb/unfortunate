import React, { Component } from 'react';
//import logo from './fortune_cookie_whole.png';
import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Cookie from "./components/Cookie";


class App extends Component {
  render() {
    return (
      <body>
      <div className="App">
      <NavBar />
      
      <Cookie /> 
        <p>I'm annoyed, is anyone reading this?
        </p>
        
        <Footer />
      
      
      </div>
      </body>
    );
  }
}

export default App;
