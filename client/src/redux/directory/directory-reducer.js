import hats from "../../images/jpg/hats-min.jpg";
import jackets from "../../images/jpg/jackets-min.jpg";
import men from "../../images/jpg/men-min.jpg";
import sneakers from "../../images/jpg/sneakers-min.jpg";
import women from "../../images/jpg/women-min.jpg";

const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: hats,
      // imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      linkUrl: "shop/hats",
      id: 1
    },
    {
      title: "jackets",
      imageUrl: jackets,
      // imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      linkUrl: "shop/jackets",
      id: 2
    },
    {
      title: "sneakers",
      imageUrl: sneakers,
      // imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      linkUrl: "shop/sneakers",
      id: 3
    },
    {
      title: "women",
      imageUrl: women,
      // imageUrl: "https://i.ibb.co/GCCdy8t/women.png",
      linkUrl: "shop/womens",
      id: 4
    },
    {
      title: "men",
      imageUrl: men,
      // imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      linkUrl: "shop/mens",
      id: 5
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
