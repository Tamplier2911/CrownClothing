import "./DirectoryMenu.scss";
import React from "react";
import MenuItem from "../MenuItem/MenuItem";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory-selectors";

const DirectoryMenu = ({ sections }) => {
  return (
    <div className="directory__menu">
      {sections.map(({ id, ...sectionProps }) => {
        return (
          <MenuItem
            key={id}
            itemStyle={`item--${id}`}
            {...sectionProps}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(DirectoryMenu);
