import React from "react";
import MenuItem from "../MenuItem/MenuItem";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory-selectors";

// JS Rendering CSS
import { DirectoryMenuContainer } from "./DirectoryMenuStyles";

const DirectoryMenu = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...sectionProps }) => {
        return <MenuItem key={id} id={id} {...sectionProps} />;
      })}
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(DirectoryMenu);
