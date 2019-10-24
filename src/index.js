import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// router
import { BrowserRouter } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
