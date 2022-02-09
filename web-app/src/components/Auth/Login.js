import React from "react";
import firebase from "../../firebase";
import { Grid, Form, Segment, Button, Header, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";

//initialisation of the components state objects
class Login extends React.Component {
  state = {
    email: "team32@gmail.com",
    password: "password123",
    errors: [],
    loading: false,
  };


  //errors are mapped and displayed for every validation
  displayErrors = (errors) =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

/* Event handler for change based on input*/

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

/* Event handler for submit based on input and validations*/

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isFormValid(this.state)) {
      this.setState({ errors: [], loading: true });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((signedInUser) => {
          console.log(signedInUser);
        })
        .catch((err) => {
          console.error(err);
          this.setState({
            errors: this.state.errors.concat(err),
            loading: false,
          });
        });
    }
  };

  /* Form validation */

  isFormValid = ({ email, password }) => email && password;

/* Event handler for error */

  handleInputError = (errors, inputName) => {
    return errors.some((error) =>
      error.message.toLowerCase().includes(inputName)
    )
      ? "error"
      : "";
  };

  //rendering the html to the web page
  render() {
    const { email, password, errors, loading } = this.state;

    //semantic-ui is used for styling the components
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" icon color="black" textAlign="center">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Northeastern_Huskies_primary_logo.svg/1200px-Northeastern_Huskies_primary_logo.svg.png" alt = "husky" />
            LOGIN TO NU SOCIAL
          </Header>
          <Form onSubmit={this.handleSubmit} size="large">
            <Segment stacked>
              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Email Address"
                onChange={this.handleChange}
                value={email}
                className={this.handleInputError(errors, "email")}
                type="email"
              />

              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                onChange={this.handleChange}
                value={password}
                className={this.handleInputError(errors, "password")}
                type="password"
              />

              <Button
                disabled={loading}
                className={loading ? "loading" : ""}
                color="red"
                fluid
                size="large"
              >
                Submit
              </Button>
            </Segment>
          </Form>
          {errors.length > 0 && (
            <Message error>
              <h3>Error</h3>
              {this.displayErrors(errors)}
            </Message>
          )}
          <Message>
            Create an account <Link to="/register">Register</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;
