import { createContext } from "react";
import SHOP_DATA from "./shop-collections";

const CollectionContext = createContext(SHOP_DATA);

export default CollectionContext;
