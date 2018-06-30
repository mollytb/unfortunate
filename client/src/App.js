import React, {Component} from 'react';
import logo from './fortune_cookie_whole.png';
import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (<div className="App">
      <NavBar/>
      <body className="Body">
        <div className="Cookie">
          <img src={logo} class="img-fluid" alt="logo"/>
        </div>
        <p></p>
      </body>
      <Footer/>

</div>);
  }
}

export default App;
