import styled from "styled-components";
import { ReactComponent as CartIcon } from "../../images/svg/shopping-bag.svg";

export const CartContainer = styled.div`
  cursor: pointer;
  position: relative;
  align-self: center;
  margin-right: 1rem;

  transition: transform 0.3s;

  &:hover {
    color: #b4b4b4;
    transform: scale(1.2);
  }

  &:hover .cartSVG {
    fill: #b4b4b4 !important;
  }
`;

export const CartSVG = styled(CartIcon)`
  width: 3rem;
  height: 3rem;
`;

export const CartCount = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 0.2rem;

  font-size: 1.5rem;
`;
