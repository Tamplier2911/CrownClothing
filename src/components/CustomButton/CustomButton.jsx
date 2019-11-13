// import "./CustomButton.scss";
import React from "react";

// JS Rendered Styles
import { CustomButtonContainer } from "./CustomButtonStyles";

// passing styles prop - either black or blue
const CustomButton = ({ children, ...otherProps }) => {
  return (
    <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
  );
};

export default CustomButton;
