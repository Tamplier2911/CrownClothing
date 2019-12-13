import { createStore, applyMiddleware } from "redux";

// middlewares
import logger from "redux-logger";
// import thunk from "redux-thunk";

// redux-saga
import createSagaMiddleware from "redux-saga";

// root saga
import rootSaga from "./root-saga";

// root reducer
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";

// creating saga middleware
const sagaMiddleware = createSagaMiddleware();

// midlewares stack
// const middlewares = [thunk];
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
  // +
  //   window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //   window.__REDUX_DEVTOOLS_EXTENSION__()
);

// use sagas
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// export default { store, persistor };
