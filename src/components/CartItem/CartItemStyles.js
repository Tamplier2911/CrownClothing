import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-column-gap: 2rem;
`;

export const CartItemImgWrapper = styled.div`
  width: 7rem;
  height: 7rem;
`;

export const CartItemImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CartItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CartItemTitle = styled.span`
  margin-bottom: 1rem;
`;

export const CartItemPrice = styled.span``;
