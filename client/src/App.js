
//import logo from './fortune_cookie_whole.png';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateFortune from "./pages/CreateFortune";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Fortune from "./pages/Fortune";

import './App.css';
//import Footer from "./components/Footer";
//import Cookie from "./components/Cookie";
//import BrokenCookie from "./components/BrokenCookie";


const App = () => (
  <Router>
    <div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Fortune" component={Fortune} />
        <Route exact path="/Account" component={Account} />
        <Route exact path="/CreateFortune" component={CreateFortune} />

        <Route component={Home} />
      </Switch>
    </div>
   
  </Router>
);
export default App;
