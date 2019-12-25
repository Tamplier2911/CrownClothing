import React, { Component } from "react";

// JS rendering CSS
import {
  ErrorContainer,
  ErrorSVG,
  ErrorText,
  ErrorParagraph
} from "./ErrorBoundaryStyles";

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }

  // catches any error thrown from any children of Error Boundary Component
  // gets error as a prop, if any children has actually experienced error
  // returning new state settled locally - so rest of component aware of it
  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }

  // got access to the error object as well as info object
  // - which component produced an error & why
  componentDidCatch(error, info) {
    // implement catching logic
    alert(error.message || "Somethign went wrong!");
    // console.log(error, info);
  }

  // depends on local state of hasErrored
  // - render either children or fallback component
  render() {
    const { hasErrored } = this.state;
    if (hasErrored) {
      return (
        <ErrorContainer>
          <ErrorSVG />
          <ErrorText>
            <ErrorParagraph>How unfortunate ಥ_ಥ</ErrorParagraph>
            <ErrorParagraph>
              You likely experienced connection issues!
            </ErrorParagraph>
          </ErrorText>
        </ErrorContainer>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
