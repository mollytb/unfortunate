
//import logo from './fortune_cookie_whole.png';
import React, {Component} from "react";
import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Cookie from "./components/Cookie";
import BrokenCookie from "./components/BrokenCookie";

class App extends Component {
  render() {
    return (
    <div>
      <div className="App">
      <NavBar />
      <p className="App-title">Click for your fortune
        </p>
      <Cookie /> 
      
      <BrokenCookie />
      
      
      </div>
       <Footer />
     </div>
    );
  }
}

export default App;
