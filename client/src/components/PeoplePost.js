//import React from "react";
import axios from "axios";
import React, { Component } from "react";

class PeoplePost extends Component {
  state = {
    name: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
    };

    axios
      .post("https://api.instagram.com/oauth/access_token", { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

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
