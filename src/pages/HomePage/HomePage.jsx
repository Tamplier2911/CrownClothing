import "./HomePage.scss";
import React from "react";
import DirectoryMenu from "../../components/DirectoryMenu/DirectoryMenu";

// JS rendered styles
import { HomePageContainer } from "./HomePage";

const HomePage = () => {
  return (
    // <div className="homepage">
    <HomePageContainer>
      <DirectoryMenu />
    </HomePageContainer>
    //</div>
  );
};

export default HomePage;
