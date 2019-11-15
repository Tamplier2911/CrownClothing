import styled, { css } from "styled-components";

const ItemsMediaBlockTop = css`
  min-height: 34vh;
  @media only screen and (max-width: 830px) {
    grid-column: 1 / 7;
  }
`;

const ItemsMediaBlockBottom = css`
  min-height: 44vh;
`;

const RenderBackground = props => {
  return `background-image: url(${props.bg})`;
};

const RenderItemStyle = props => {
  switch (props.id) {
    case 1:
      return `grid-column: 1 / 3`;
    case 2:
      return `grid-column: 3 / 5`;
    case 3:
      return `grid-column: 5 / 7`;
    case 4:
      return `grid-column: 1 / 4`;
    case 5:
      return `grid-column: 4 / 7`;
    default:
      return;
  }
};

const RenderItemQuery = props => {
  if (props.id === 1 || props.id === 2 || props.id === 3) {
    return ItemsMediaBlockTop;
  } else if (props.id === 4 || props.id === 5) {
    return ItemsMediaBlockBottom;
  }
};

export const MenuItemBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  transform: scale(1.2);
  transition: transform 3s;

  ${RenderBackground}
`;

export const MenuItemContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  opacity: 0.6;
  transition: opacity 0.3s;

  padding: 2rem;
  border: 0.1rem solid #000;
`;

export const MenuItemFigure = styled.figure`
  cursor: pointer;
  height: 100%;
  overflow: hidden;
  border: 0.1rem solid #000;
  position: relative;

  &:hover {
    background-size: cover;
  }

  ${RenderItemStyle}
  ${RenderItemQuery}

  &:hover ${MenuItemBackground} {
    transform: scale(1);
  }

  &:hover ${MenuItemContent} {
    opacity: 0.9;
  }
`;

export const MenuItemTitle = styled.h1`
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const MenuItemText = styled.span`
  text-transform: uppercase;
  white-space: nowrap;
`;
