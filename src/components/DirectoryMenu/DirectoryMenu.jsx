import "./DirectoryMenu.scss";
import React, { Component } from "react";
import MenuItem from "../MenuItem/MenuItem";

class DirectoryMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3
        },
        {
          title: "women",
          imageUrl: "https://i.ibb.co/GCCdy8t/women.png",
          id: 4
        },
        {
          title: "men",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          id: 5
        }
      ]
    };
  }

  componentDidMount() {}
  render() {
    return (
      <div className="directory__menu">
        {this.state.sections.map(
          ({ id, title, imageUrl }) => {
            return (
              <MenuItem
                key={id}
                itemStyle={`item--${id}`}
                title={title}
                img={imageUrl}
              />
            );
          }
        )}
      </div>
    );
  }
}

export default DirectoryMenu;
