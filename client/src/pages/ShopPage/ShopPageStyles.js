import styled from "styled-components";

export const ShopPageContainer = styled.div`
  width: 100%;
  min-height: 80vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content;
  grid-row-gap: 3rem;

  &__title {
    color: var(--black);
    font-size: 3.2rem;
    font-weight: 300;
  }
`;
