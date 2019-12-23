import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {

    // TYPOGRAPHY
    --font-reg: "Open Sans Condensed", sans-serif;
    // --font-title: "Raleway", sans-serif;
  
    // COLOR PALET
    --black: #000;
    --white: #fff;
    --cl-grey: #a1a1a1;
    --cl-danger: #f88a8a;
    --cl-blue: #3a79f2;
    --cl-font: #333;
  }
  
  // BREAKPOINTS
  
  // 768px / 16px = 48em
  $tablet: 48em;

  // 425px / 16px = 26.5625em
  $mobile: 26.563em;
  
  // BASE
  
  *,
  *:after,
  *:before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  
    // 9px / 16px * 100 = 56.25%
    @media only screen and (max-width: $tablet) {
      font-size: 56.25%;
    }
  
    // 8px / 16 * 100 = 50%
    @media only screen and (max-width: $mobile) {
      font-size: 50%;
    }
  }
  
  body {
    font-family: var(--font-reg);
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6rem;
    color: var(--cl-font);
  
    // SCROLL
  
    &::-webkit-scrollbar {
      width: 0.8rem;
      background-color: #2834930c;
    }
  
    &::-webkit-scrollbar-thumb {
      background-image: linear-gradient(to bottom, #434444, #626767);
      border-radius: 5rem;
    }
  
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px #0000004d;
      box-shadow: inset 0 0 6px #0000004d;
    }
  }
  
  // SELECTION
  
  ::selection {
    background-color: var(--cl-grey);
    color: var(--white);
  }
  
  // FLOATS FOR GRACEFUL DEGRADATION
  
  @mixin clearfix {
    :after {
      display: table;
      content: "";
      clear: both;
    }
  }
  
`;
