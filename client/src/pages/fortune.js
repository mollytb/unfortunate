import React, { Component } from "react";
import NavBar from "../components/NavBar";
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
    render () {
        return (
            <div> 
                <NavBar />

            </div>
        );
    }
}
export default Fortune;