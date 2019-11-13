import "./SignIn.scss";
import React, { Component } from "react";
// import { withRouter } from "react-router-dom";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

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
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({ email: "", password: "" });

      // this.props.history.push("/");
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
    return (
      <div className="signIn">
        <h2 className="signIn__title">I already have an account</h2>
        <span className="signIn__sub">
          Sign in with your email and password
        </span>
        <form className="signIn__form" onSubmit={this.onSubmit}>
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

          <CustomButton
            styles="blue"
            onClick={() => signInWithGoogle(this.props)}
          >
            Signn In With Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

// export default withRouter(SignIn);
export default SignIn;
