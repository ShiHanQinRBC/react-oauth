import React, { Component } from "react";
import InstagramLogin from "react-instagram-login";
import axios from "axios";
//https://jsonplaceholder.typicode.com/users

export default class Instagram extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      code: "",
    };
  }

  responseInstagram = (response) => {
    //console.log(response);
    this.setState({
      isLoggedIn: true,
      code: response,
    });
  };

  responseInstagramFail = (response) => {
    console.log(response);
    console.log("oops");
  };

  getToken = async (code) => {
    await axios
      .post("https://api.instagram.com/oauth/access_token", {
        client_id: "291881972197269",
        client_secret: "4aec258d012851ac0d7bc1573fa529b2",
        grant_type: "authorization_code",
        redirect_uri: "https://988d51e2132b.ngrok.io/",
        code: code,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  render() {
    let instaContent;

    //console.log(this.state.code);

    if (this.state.isLoggedIn) {
      //Pass in code to retrieve access token
      this.getToken(this.state.code);

      instaContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px",
          }}
        >
          <h2>Access Code {this.state.code}</h2>
        </div>
      );
    } else {
      instaContent = (
        <InstagramLogin
          clientId="291881972197269"
          scope={["user_profile", "user_media"]}
          buttonText="Login"
          onSuccess={this.responseInstagram}
          onFailure={this.responseInstagramFail}
        />
      );
    }
    return <div>{instaContent}</div>;
  }
}
