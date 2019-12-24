import React from "react";
import { withRouter } from "react-router-dom";

// JS Rendering CSS
import {
  MenuItemFigure,
  MenuItemBackground,
  MenuItemContent,
  MenuItemTitle,
  MenuItemText
} from "./MenuItemStyles";

const onItemClick = props => {
  const { history, match, linkUrl } = props;
  history.push(`${match.url}${linkUrl}`);
};

const MenuItem = props => {
  const { id, title, imageUrl } = props;
  return (
    <MenuItemFigure id={id} onClick={() => onItemClick(props)}>
      <MenuItemBackground bg={imageUrl}></MenuItemBackground>
      <MenuItemContent>
        <MenuItemTitle>{title}</MenuItemTitle>
        <MenuItemText>Shop Now</MenuItemText>
      </MenuItemContent>
    </MenuItemFigure>
  );
};

export default withRouter(MenuItem);
