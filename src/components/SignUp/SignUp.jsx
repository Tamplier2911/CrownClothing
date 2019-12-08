import React, { useState } from "react";
// import React, { Component } from "react";
// import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { formSignUpStart } from "../../redux/user/user-actions";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

// import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

// JS Rendering CSS
import {
  SignUpContainer,
  SignUpTitle,
  SignUpSubTitle,
  SignUpForm
} from "./SignUpStyles";

const SignUp = ({ formSignUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const onSubmit = e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Confirmed password must match original.");
      return;
    }

    formSignUpStart({
      displayName: displayName,
      email: email,
      password: password
    });
  };

  const onInputChange = e => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <SignUpSubTitle>Sign up with your email and password</SignUpSubTitle>
      <SignUpForm onSubmit={onSubmit}>
        <FormInput
          onInputChange={onInputChange}
          value={displayName}
          label="Name"
          name="displayName"
          type="text"
          required
        />
        <FormInput
          onInputChange={onInputChange}
          value={email}
          label="Email"
          name="email"
          type="email"
          required
        />
        <FormInput
          onInputChange={onInputChange}
          value={password}
          label="Password"
          name="password"
          type="password"
          required
        />
        <FormInput
          onInputChange={onInputChange}
          value={confirmPassword}
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          required
        />
        <CustomButton styles="black" type="submit">
          Sign Up
        </CustomButton>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default connect(null, { formSignUpStart })(SignUp);

/*

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
    const { formSignUpStart } = this.props;

    if (password !== confirmPassword) {
      alert("Confirmed password must match original.");
      return;
    }

    formSignUpStart({
      displayName: displayName,
      email: email,
      password: password
    });

    

    // try {
      
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );

    //   await createUserProfileDocument(user, {
    //     displayName
    //   });
      

    //   this.setState({
    //     displayName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: ""
    //   });

    //   this.props.history.push("/");
      
    // } catch (err) {
    //   // Implement meaningful error handler.
    //   alert(err.message);
    // }

    
  };
  
  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <SignUpTitle>I do not have an account</SignUpTitle>
        <SignUpSubTitle>Sign up with your email and password</SignUpSubTitle>
        <SignUpForm onSubmit={this.onSubmit}>
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
        </SignUpForm>
      </SignUpContainer>
    );
  }
}

// export default withRouter(SignUp);
export default connect(null, { formSignUpStart })(SignUp);

*/
