import "./SignUp.scss";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  onSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Confirmed password must match original.");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, {
        displayName
      });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });

      this.props.history.push("/");
    } catch (err) {
      // Implement meaningful error handler.
      alert(err.message);
    }
  };

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="signUp">
        <h2 className="signUp__title">I do not have an account</h2>
        <span className="signUp__sub">
          Sign up with your email and password
        </span>
        <form className="signUp__form" onSubmit={this.onSubmit}>
          <FormInput
            onInputChange={this.onInputChange}
            value={displayName}
            label="Name"
            name="displayName"
            type="text"
            required
          />
          <FormInput
            onInputChange={this.onInputChange}
            value={email}
            label="Email"
            name="email"
            type="email"
            required
          />
          <FormInput
            onInputChange={this.onInputChange}
            value={password}
            label="Password"
            name="password"
            type="password"
            required
          />
          <FormInput
            onInputChange={this.onInputChange}
            value={confirmPassword}
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            required
          />
          <CustomButton styles="black" type="submit">
            Sign Up
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);
