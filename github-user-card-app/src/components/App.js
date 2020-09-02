import React from "react";
import "./App.css";
import UserCard from "./UserCard";
import Followers from "./Followers";
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
          <h1>GitHub User Spotlight</h1>
        </header>
        <UserCard user={this.state.user} />
        <div class="spotlight spot1"></div>
        <div class="spotlight spot2"></div>
        <div className="Followers-section">
          <h2 className="Subtitle">User's Followers</h2>
          <Followers followers={this.state.followers} />
        </div>
      </div>
    );
  }
}

export default App;
