import React from "react";

// JS Rendering CSS
import {
  FooterContainer,
  FooterAuthor,
  FooterCopyrights
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterAuthor>App created by Artem Nikolaiev</FooterAuthor>
      <FooterCopyrights>&copy; all rights reserved</FooterCopyrights>
    </FooterContainer>
  );
};

export default Footer;
