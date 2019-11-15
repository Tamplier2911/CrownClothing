import styled, { css } from "styled-components";
import StripeCheckout from "react-stripe-checkout";

const StripeButtonAndStripeHiddenDivStyles = css`
  cursor: pointer !important;
  font-family: var(--font-reg) !important;
  font-size: 1.8rem !important;
  font-weight: 300 !important;
  text-transform: uppercase !important;

  white-space: nowrap !important;
  border: none !important;
  border-radius: 0 !important;

  background-image: none !important;
  box-shadow: none !important;
  color: transparent !important;

  font-size: 1.6rem !important;
  font-weight: 300 !important;

  color: var(--black) !important;
  background-color: var(--white) !important;

  transition: color 0.3s, background-color 0.3s !important;
`;

export const StripeCheckoutButton = styled(StripeCheckout)`
  ${StripeButtonAndStripeHiddenDivStyles}

  align-self: center;
  display: grid !important;
  border: 0.1rem solid var(--black) !important;

  &:hover {
    background-color: var(--black) !important;
  }

  &:focus {
    outline: none !important;
  }

  &:hover span {
    color: var(--white) !important;
    background-color: var(--black) !important;
  }

  & span {
    ${StripeButtonAndStripeHiddenDivStyles}

    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    height: 100% !important;
    line-height: normal !important;

    padding: 1.2rem !important;
  }
`;
