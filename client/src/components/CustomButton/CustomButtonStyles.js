import styled, { css } from "styled-components";

const black = css`
  color: var(--white);
  background-color: var(--black);
  border: 0.1rem var(--black) solid;

  &:hover {
    color: var(--black);
    background-color: var(--white);
    border: 0.1rem var(--black) solid;
  }
`;

const blue = css`
  color: var(--white);
  background-color: var(--cl-blue);
  border: 0.1rem var(--cl-blue) solid;

  &:hover {
    color: var(--cl-blue);
    background-color: var(--white);
    border: 0.1rem var(--cl-blue) solid;
  }
`;

const getButtonStyle = props => {
  if (props.styles === "black") return black;
  if (props.styles === "blue") return blue;
};

export const CustomButtonContainer = styled.button`
  cursor: pointer;
  font-family: var(--font-reg);
  font-size: 1.6rem;
  text-transform: uppercase;
  padding: 1.4rem;
  white-space: nowrap;
  transition: color 0.3s, background-color 0.3s;

  ${getButtonStyle}

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &::-moz-focus-inner {
    border: 0;
    outline: none;
  }
`;
