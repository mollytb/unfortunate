import React, { Component } from "react";
import NavBar from 
import API from "../../utils/API";

class Fortune extends Component {
    state = {
        fortunes: []
    };
    componentDidMount () {
        this.loadFortune();
    }
    loadFortune = () => {
        API.getFortunes()
        .then(res => this.setState({ fortune: res.data}))
        .catch(err=> console.log(err));
    }
}