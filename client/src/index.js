// import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// router
import { BrowserRouter } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

// redux-persist
import { PersistGate } from "redux-persist/integration/react";

// JS Rendered Styles
import { GlobalStyle } from "./indexStyles";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
