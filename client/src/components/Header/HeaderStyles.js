import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const HeaderLinkStyle = css`
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: color 0.3s, transform 0.3s;
  color: var(--cl-font);
  font-size: 2rem;

  white-space: nowrap;

  &:link,
  &:visited {
    color: var(--cl-font);
    font-size: 2rem;
  }

  &:hover,
  &:active {
    color: #b4b4b4;
    transform: scale(1.2);
  }
`;

export const HeaderContainer = styled.header`
  position: relative;
  padding: 1rem;
  min-height: 8vh;
  grid-column: center-start / center-end;

  text-transform: uppercase;

  display: flex;
`;

export const LogoContainer = styled(Link)`
  margin-right: auto;
  margin-left: 1rem;
  align-self: center;
  text-decoration: none;
`;

export const Nav = styled.nav`
  display: flex;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const Li = styled.li`
  margin-right: 2rem;
`;

export const NavigationLink = styled(Link)`
  ${HeaderLinkStyle}
`;

export const NavigationDiv = styled.div`
  ${HeaderLinkStyle}
`;
