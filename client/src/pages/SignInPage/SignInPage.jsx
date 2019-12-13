import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

// JS Rendered CSS
import { SignInPageContainer } from "./SignInPageStyles";

const SignInPage = () => {
  return (
    <SignInPageContainer>
      <SignIn />
      <SignUp />
    </SignInPageContainer>
  );
};

export default SignInPage;
