import styled from "styled-components";

export const CollectionOverviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content;
  grid-row-gap: 3rem;
`;

export const CollectionOverviewTitle = styled.h1`
  color: var(--black);
  font-size: 3.2rem;
  font-weight: 300;
`;

export const CollectionOverviewNotFound = styled.div`
  color: var(--black);
  font-size: 3.2rem;
  text-align: center;
`;
