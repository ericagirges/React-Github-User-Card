import React from "react";
import "./App.css";
import UserCard from "./UserCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
    console.log('Constructor is running')
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>GitHub Meet</h1>
        </header>
        <UserCard />
      </div>
    );
  }
}

export default App;
