import styled, { css } from "styled-components";

const ids = [4, 13, 21, 26, 33];

const MediaStyleSpan = css`
  grid-column: 1 / span 3;
`;

const MediaStyleTile = css`
  grid-column: span 1 / span 1;
`;

const RenderMediaSpan = props => {
  if (ids.includes(props.id)) {
    return MediaStyleSpan;
  }
};

const RenderMediaTile = props => {
  if (ids.includes(props.id)) {
    return MediaStyleTile;
  }
};

export const CollectionItemContainer = styled.figure`
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 1036px) {
    ${RenderMediaSpan}
  }

  @media only screen and (max-width: 699px) {
    ${RenderMediaTile}
  }
`;

export const CollectionItemImgWrp = styled.div`
  overflow: hidden;
  height: 35rem;
  position: relative;

  &:hover img {
    filter: brightness(120%);
  }

  &:hover button {
    opacity: 1;
    visibility: visible;
  }
`;

export const CollectionItemImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;

  transition: filter 0.3s;
`;

export const CollectionItemBtn = styled.button`
  cursor: pointer;
  transform: translate(-50%, 0%);
  transition: background-color 0.3s, color 0.3s, visibility 0.5s, opacity 0.5s;

  position: absolute;
  bottom: 10%;
  left: 50%;
  width: 19rem;

  text-decoration: none;
  text-transform: uppercase;

  padding: 1.5rem 6rem;
  color: #333;
  background-color: #ffffffd5;
  border: none;
  white-space: nowrap;

  opacity: 0;
  visibility: hidden;

  display: flex;
  justify-content: center;

  @media (pointer: coarse) {
  }

  @media only screen and (hover: none) {
    opacity: 1;
    visibility: visible;
  }

  &:hover,
  &:active {
    color: #fff;
    background-color: #000000b2;
  }

  &:focus {
    outline: none;
  }
`;

export const CollectionItemContent = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

export const CollectionItemName = styled.div`
  font-size: 1.8rem;
  margin-right: auto;
`;

export const CollectionItemPrice = styled.div`
  font-size: 1.8rem;
`;
