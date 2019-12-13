import styled from "styled-components";

export const SignInContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  align-content: start;
  grid-row-gap: 2rem;
`;

export const SignInTitle = styled.h2`
  font-weight: 300;
  font-size: 3rem;
  line-height: 2.5rem;
`;

export const SignInSubtitle = styled.span`
  font-size: 2rem;
  line-height: 2rem;
`;

export const SignInForm = styled.form`
  display: grid;
  grid-row-gap: 5rem;
  grid-column-gap: 2rem;

  grid-template-columns: repeat(2, 1fr);

  margin-top: 3rem;
`;
