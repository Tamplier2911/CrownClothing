import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  grid-row-gap: 2rem;
`;

export const SignUpTitle = styled.h2`
  font-weight: 300;
  font-size: 3rem;
  line-height: 2.5rem;
`;

export const SignUpSubTitle = styled.span`
  font-size: 2rem;
  line-height: 2rem;
`;

export const SignUpForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 5rem;
  grid-column-gap: 2rem;
  margin-top: 3rem;
`;
