import styled from "styled-components";

export const CollectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content max-content;
  grid-row-gap: 2rem;
`;

export const CollectionTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 300;
`;

export const CollectionView = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`;
