import styled, { css } from "styled-components";

const spinnereSharedCode = css`
  grid-area: 1 / 1 / 2/ 2;
  border-radius: 50%;
  background-color: transparent;
  border: 4px solid transparent;
  border-top-color: #777;
  border-bottom-color: #777;
`;

const spin = css`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const spinoff = css`
  @keyframes spinoff {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;

export const SpinnerContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const OuterSpinner = styled.div`
  ${spinnereSharedCode}
  width: 10vw;
  height: 10vw;
  -webkit-animation: 1s spin linear infinite;
  animation: 1s spin linear infinite;
  ${spin}
`;

export const InnerSpiner = styled.div`
  ${spinnereSharedCode}
  width: 5vw;
  height: 5vw;
  -webkit-animation: 1s spinoff linear infinite;
  animation: 1s spinoff linear infinite;
  ${spinoff}
`;
