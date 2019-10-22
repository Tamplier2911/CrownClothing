import "./SignInPage.scss";
import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const SignInPage = () => {
  return (
    <div className="signInPage">
      {/* <h3>Sign In Page</h3> */}
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInPage;
