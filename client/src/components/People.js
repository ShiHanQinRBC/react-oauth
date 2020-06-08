//import React from "react";
import axios from "axios";
import React, { Component } from "react";

class People extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      this.setState({ persons: res.data });
    });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
    );
  }
}

// const api = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com/",
// });

export default People;
