import styled from "styled-components";
import { Link } from "react-router-dom";

export const CollectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content max-content;
  grid-row-gap: 2rem;
`;

export const CollectionTitleLink = styled(Link)`
  &:link,
  &:visited {
    font-size: 2.8rem;
    font-weight: 300;
    color: var(--cl-font);
    text-decoration: none;
    transition: color 0.3s;
  }

  &:hover,
  &:active {
    color: #b4b4b4;
  }
`;

export const CollectionTitle = styled.div`
  display: grid;
  grid-template-columns: max-content;
`;

export const CollectionView = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`;

// Create a style for new link:
// Make it look like currently looking title
// Remove decoration, add hover effect, transitions and all.
