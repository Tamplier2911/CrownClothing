import React from "react";

// JS Rendering CSS
import { SpinnerContainer, OuterSpinner, InnerSpiner } from "./SpinnerStyles";

const Spinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading === true ? (
    <SpinnerContainer>
      <OuterSpinner></OuterSpinner>
      <InnerSpiner></InnerSpiner>
    </SpinnerContainer>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default Spinner;
