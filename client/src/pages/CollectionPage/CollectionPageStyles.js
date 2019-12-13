import styled from "styled-components";

export const CollectionPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content;
  grid-row-gap: 3rem;
`;

export const CollectionPageTitle = styled.h1`
  color: var(--black);
  font-size: 3.2rem;
  font-weight: 300;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const CollectionPageBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23.3rem, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`;

export const CollectionPageNotFound = styled.div`
  color: var(--black);
  font-size: 3.2rem;
  text-align: center;
`;
