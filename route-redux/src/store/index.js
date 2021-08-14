import { createStore, applyMiddleware, combineReducers } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import history from "../routes/history";

const middlewares = [
    thunk,
    routerMiddleware(history),
];

//Ocorria um erro ao usar a função createStore sem um reducer
const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
  });

const store = createStore(connectRouter(history)(createRootReducer(history)), applyMiddleware(...middlewares));

export default store;