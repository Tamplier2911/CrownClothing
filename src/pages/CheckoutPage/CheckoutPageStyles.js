import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 100%;
  min-height: 80vh;

  display: grid;
  grid-template-rows: min-content min-content 1fr min-content;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 4rem;
`;

export const CheckoutPageTitle = styled.h1`
  grid-column: 1/ -1;

  font-size: 3.2rem;
  font-weight: 300;
  color: var(--black);
`;

export const CheckoutPageBlock = styled.div`
  grid-column: 1 / -1;

  display: grid;
  grid-template-columns: minmax(10rem, 1fr) repeat(3, 1fr) min-content;
  grid-column-gap: 1rem;

  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(5, 1fr);
  }

  &::after {
    grid-column: 1/-1;
    content: "";
    display: inline-block;
    width: 100%;
    height: 0.2rem;
    background-color: #b4b4b4;
    margin-top: 3rem;
  }
`;

export const CheckoutPageBlockTitle = styled.span`
  font-size: 2.2rem;
`;

export const CheckoutPageItems = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-row-gap: 2rem;
  grid-auto-rows: min-content;
`;

export const CheckoutPageEmpty = styled.div`
  font-size: 2.2rem;
  text-align: center;
`;

export const CheckoutPageFooter = styled.div`
  grid-column: 1 / -1;

  &::before {
    grid-column: 1/-1;
    content: "";
    display: inline-block;
    width: 100%;
    height: 0.2rem;
    background-color: #b4b4b4;
    margin-bottom: 3rem;
  }

  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media only screen and (max-width: 744px) {
    grid-template-columns: repeat(3, 1fr);

    &::before {
      grid-column: 1/4;
    }
  }

  @media only screen and (max-width: 616px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CheckoutPageTotal = styled.div`
  grid-column: 5 / -1;
  font-size: 3.2rem;
  align-self: center;
  justify-self: end;

  @media only screen and (max-width: 744px) {
    grid-column: 3 / 4;
  }

  @media only screen and (max-width: 400px) {
    grid-column: 2 / 3;
    justify-self: center;
  }
`;
