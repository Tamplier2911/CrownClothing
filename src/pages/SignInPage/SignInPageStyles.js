import styled from "styled-components";

export const SignInPageContainer = styled.div`
  width: 100%;
  min-height: 80vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 4rem;

  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    grid-row-gap: 4rem;
  }
`;
