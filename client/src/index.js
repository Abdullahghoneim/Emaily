import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducer from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import App from "./components/App";
import axios from "axios";
window.axios = axios;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

// console.log("environment key", process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
// console.log("production", process.env.NODE_ENV);
