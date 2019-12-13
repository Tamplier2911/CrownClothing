// import React, { Component } from "react";
import React, { useState } from "react";

import { connect } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user-actions";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import {
  SignInContainer,
  SignInTitle,
  SignInSubtitle,
  SignInForm
} from "./SignInStyles";

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });
  const { email, password } = userCredentials;

  const onInputChange = e => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    emailSignInStart({ email: email, password: password });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <SignInSubtitle>Sign in with your email and password</SignInSubtitle>
      <SignInForm onSubmit={onSubmit}>
        <FormInput
          onInputChange={e => onInputChange(e)}
          value={email}
          label="Email"
          name="email"
          type="email"
          required
        />

        <FormInput
          onInputChange={e => onInputChange(e)}
          value={password}
          label="Password"
          name="password"
          type="password"
          required
        />

        <CustomButton styles="black" type="submit">
          Sign In
        </CustomButton>

        <CustomButton styles="blue" type="button" onClick={googleSignInStart}>
          Signn In With Google
        </CustomButton>
      </SignInForm>
    </SignInContainer>
  );
};

export default connect(null, { googleSignInStart, emailSignInStart })(SignIn);

/*
class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  onSubmit = async e => {
    e.preventDefault();

    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart({ email: email, password: password });
  };

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <SignInSubtitle>Sign in with your email and password</SignInSubtitle>
        <SignInForm onSubmit={this.onSubmit}>
          <FormInput
            onInputChange={this.onInputChange}
            value={this.state.email}
            label="Email"
            name="email"
            type="email"
            required
          />

          <FormInput
            onInputChange={this.onInputChange}
            value={this.state.password}
            label="Password"
            name="password"
            type="password"
            required
          />

          <CustomButton styles="black" type="submit">
            Sign In
          </CustomButton>

          <CustomButton styles="blue" type="button" onClick={googleSignInStart}>
            Signn In With Google
          </CustomButton>
        </SignInForm>
      </SignInContainer>
    );
  }
}

// export default withRouter(SignIn);

export default connect(null, { googleSignInStart, emailSignInStart })(SignIn);

*/
