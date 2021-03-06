import styled from "styled-components";

export const AppContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  grid-template-columns:
    [full-start] minmax(0, 1fr)
    [center-start] repeat(
      10,
      [col-start] minmax(min-content, 11.7rem) [col-end]
    )
    [center-end]
    minmax(0, 1fr) [full-end];
`;

export const AppMain = styled.main`
  min-height: 80vh;
  padding: 2rem 2rem;
  background-color: var(--white);
  grid-column: center-start / center-end;

  display: flex;
  align-items: center;
  justify-content: center;
`;
