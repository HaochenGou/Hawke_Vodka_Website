import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";
import { Provider } from "react-redux";
import { fetchProducts } from "./redux/actions/productActions";
import rootReducer from "./redux/reducers/rootReducer";
import products from "./data/products.json";
import App from "./App";
import "./assets/scss/style.scss";
import * as serviceWorker from "./serviceWorker";
import { composeWithDevTools } from "redux-devtools-extension";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(thunk, save()))
);

// fetch products from json file
store.dispatch(fetchProducts(products));
const firebaseConfig = {
  apiKey: "AIzaSyAUuLcZ3DGderbhff7YXom3nm9TFLMY1bY",
  authDomain: "hawke-prohibition.firebaseapp.com",
  projectId: "hawke-prohibition",
  storageBucket: "hawke-prohibition.appspot.com",
  messagingSenderId: "887683857141",
  appId: "1:887683857141:web:1f1eb74c06aa452fd4e3bc",
  measurementId: "G-8JK1YY7HBS"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
