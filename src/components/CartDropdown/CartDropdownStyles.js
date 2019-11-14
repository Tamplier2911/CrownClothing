import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: fixed;
  top: 5rem;
  right: 2rem;
  border: 0.1rem solid var(--black);
  width: 30%;
  max-width: 35rem;
  height: 40rem;
  background-color: var(--white);

  z-index: 10;

  display: grid;
  grid-template-rows: 1fr min-content;

  @media only screen and (max-width: 842px) {
    width: 24.8rem;
  }
`;

export const CartDropdownToggler = styled.div`
  cursor: pointer;
  position: absolute;
  font-size: 2rem;
  left: -2rem;

  transition: color 0.3s;

  &:hover {
    color: #8f8f8f;
  }
`;

export const CartDropdownItems = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  padding: 1rem;

  display: grid;
  grid-template-rows: min-content;
  grid-auto-rows: min-content;
  grid-row-gap: 1rem;

  &::-webkit-scrollbar {
    width: 0.5rem;
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
`;

export const CartDropdownEmpty = styled.div`
  font-size: 1.8rem;
  min-height: 30.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartDropdownButtonContainer = styled.div`
  padding: 1rem;
  display: grid;
`;
