import React from "react";
import "./App.css";
import UserCard from "./UserCard";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
    };
    console.log("Constructor is running");
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/ericagirges")
      .then((response) => {
        this.setState({
          user: response.data,
        });
      })
      .catch((error) => console.log(error));

    axios
      .get("https://api.github.com/users/ericagirges/followers")
      .then((response) => {
        this.setState({
          followers: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>GitHub Meet</h1>
        </header>
        <UserCard user={this.state.user} followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
