import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { Map } from "immutable";
import reducers from "./reducers";
// import isProduction from "./utils/isProduction";
// import rootSaga from "./sagas";

// const initialState = Map({});

// const sagaMiddleware = createSagaMiddleware();

// let localStore;

// if (isProduction) {
//   localStore = createStore(
//     reducers,
//     initialState,
//     applyMiddleware(sagaMiddleware)
//   );
// } else {
//   const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//   localStore = createStore(
//     reducers,
//     initialState,
//     enhancer(applyMiddleware(sagaMiddleware, createLogger()))
//   );
// }

/**
 * Run saga middleware
 */
// sagaMiddleware.run(rootSaga);
// const store = localStore;

const initialState = Map({});

const sagaMiddleware = createSagaMiddleware();

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  initialState,
  enhancer(applyMiddleware(sagaMiddleware, createLogger()))
);

export default store;
