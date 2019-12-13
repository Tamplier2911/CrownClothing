import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  font-size: 2rem;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr) minmax(min-content, 5rem);
  grid-column-gap: 1rem;
  align-items: center;
  justify-items: start;
`;

export const CheckoutItemImgWrp = styled.div`
  width: 10rem;
  height: 12rem;
`;

export const CheckoutItemImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const CheckoutItemDesc = styled.div``;

export const CheckoutItemQuan = styled.div`
  display: flex;
  align-items: center;
  &--number {
    margin-right: 0.2rem;
  }
`;

export const CheckoutItemChevron = styled.div`
  cursor: pointer;
  font-size: 2.4rem;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #b4b4b4;
  }

  &:not(:last-child) {
    margin-right: 0.2rem;
  }

  &:nth-child(3) {
    margin-left: 0.2rem;
  }
`;

export const CheckoutItemQuanNumber = styled.span``;

export const CheckoutItemPrice = styled.div``;

export const CheckoutItemRemove = styled.div`
  cursor: pointer;
  transition: color 0.3s;
  justify-self: center;

  &:hover {
    color: #b4b4b4;
  }
`;
