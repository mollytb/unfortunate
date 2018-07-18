import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import {List, FortuneText} from "../../components/FortuneText";
import {Link} from "react-router-dom"
class Account extends Component {
  state = {
        fortunes: [],
        fortune: "",
        user: ""
    };
    componentDidMount () {
        this.loadFortunes();
    };
    loadFortunes = () => {
      API.getFortunes()
        .then(res =>{
          console.log(res.data)
          this.setState({ fortunes: res.data, fortune: "" })
        })
        .catch(err => console.log("problem with API call getFortunes"));
    };

  render() {
    return (
      <div>
        <div className="App">
          <NavBar />
          <p className="App-title"></p>
          <div>
            <Link to ="/CreateFortune">
              <div className="card">
                <h5 className="card-header">Click here to create your own fortune</h5>
              </div>
            </Link>
            {/* <div className="card"> */}
              {/* <h5 className="card-header">Favorite Unfortunes</h5> */}
              {/* <div className="card-body"> */}
                {/* <p className="card-text">Dynamically add favortied fortunes??</p> */}
              {/* </div> */}
            {/* </div> */}
            <div className="card">
              <h5 className="card-header">Your Unfortunes</h5>
                <div className="card-body">
                {this.state.fortunes.length ? (
                  <List>
                    {this.state.fortunes.map(fortune => {
                      return (
                        <div className="card-text" >
                        <FortuneText key={fortune._id}>
                        <strong>
                        {fortune.fortune}
                        </strong>
                        </FortuneText>
                    </div>
                      );
                    })}
                    </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
                </div>
            </div>
          </div>
        </div>
      <Footer />
      </div >
        );
      }
    }

export default Account;
