import styled from "styled-components";
import { ReactComponent as ErrorBag } from "../../images/svg/shopping-bag-crossed.svg";

export const ErrorContainer = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  align-items: center;
  grid-column-gap: 2rem;

  @media only screen and (max-width: 425px) {
    grid-template-columns: 1fr;
    justify-items: center;
    grid-row-gap: 4rem;
  }
`;
export const ErrorSVG = styled(ErrorBag)`
  width: 10rem;
  height: 10rem;
`;
export const ErrorText = styled.div`
  font-size: 2rem;
  line-height: 1.2;

  display: grid;
  justify-items: center;
  grid-row-gap: 0.5rem;
`;

export const ErrorParagraph = styled.p``;
