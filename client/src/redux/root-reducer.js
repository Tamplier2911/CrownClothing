// redux
import { combineReducers } from "redux";

// redux-persist
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// reducers
import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart-reducer";
import directoryReducer from "./directory/directory-reducer";
import shopReducer from "./shop/shop-reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cartDropdown"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cartDropdown: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
