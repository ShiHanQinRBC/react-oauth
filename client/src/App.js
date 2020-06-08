import React, { Component } from "react";
import "./App.css";
import Instagram from "./components/Instagram";
//import People from "./components/People";

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Insta Auth</h1>
        </header>
        <p className="App-intro">To get started, authenticate with Insta</p>
        <Instagram />
        {/* <People /> */}
      </div>
    );
  }
}

export default App;
