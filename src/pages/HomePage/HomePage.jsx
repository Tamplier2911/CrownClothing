import React from "react";
import DirectoryMenu from "../../components/DirectoryMenu/DirectoryMenu";

// JS rendered styles
import { HomePageContainer } from "./HomePageStyles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <DirectoryMenu />
    </HomePageContainer>
  );
};

export default HomePage;
