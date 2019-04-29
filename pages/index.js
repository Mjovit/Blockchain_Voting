import React, { Component } from "react";
import { Header, Segment} from "semantic-ui-react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Message,
  Container
} from "semantic-ui-react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { Router } from "../routes";

class LoginIndex extends Component {
  state = {
    userId: '',
    uPass: '',
    errorMessage: '',
    loading: false
  };
  onSubmit = event => {
    event.preventDefault();
    const { userId, uPass, loading, errorMessage } = this.state;
    this.setState({ loading: true, errorMessage: '' });
    try {
      var config = {
        apiKey: "AIzaSyBaO1rh2SwdcHWFlep_-cplUZXYfmOCjag",
        authDomain: "login-53740.firebaseapp.com",
        databaseURL: "https://login-53740.firebaseio.com",
        projectId: "login-53740",
        storageBucket: "login-53740.appspot.com",
        messagingSenderId: "126005352850"
      };
      // Initialize Firebase
      firebase.initializeApp(config);
      var ref = firebase.database().ref();
      ref.child("Voters").on("value", function(snapshot) {
        if (snapshot.child(userId).exists()) {
          if (snapshot.child(userId).val() == uPass) {
            Router.pushRoute(`/dashboard`);
          } else {
            setTimeout("window.location.reload(true);", 5000);
          }
        } else {
          setTimeout("window.location.reload(true);", 5000);
        }
      });
    } catch (err) {

      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };
  render() {
    return (
      <Segment inverted>
        <Container>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
          <Header inverted pointing secondary size="huge" textAlign="center">
            Evote
          </Header>

          <Form
            inverted
            pointing
            secondary
            onSubmit={this.onSubmit}
            error={!!this.state.errorMessage}
          >
            <Form.Field>
              <label>Voter ID</label>
              <Input
                type="text"
                name="first-name"
                placeholder="Voter ID"
                value={this.state.userId}
                onChange={event =>
                  this.setState({ userId: event.target.value })
                }
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <Input
                type="password"
                name="first-name"
                placeholder="Password"
                value={this.state.uPass}
                onChange={event => this.setState({ uPass: event.target.value })}
              />
            </Form.Field>
            {/*<Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>*/}
            <Message error header="Oops!" content={this.state.errorMessage} />
            <Button loading={this.state.loading} primary>
              Login
            </Button>
          </Form>
        </Container>
      </Segment>
    );
  }
}

export default LoginIndex;
