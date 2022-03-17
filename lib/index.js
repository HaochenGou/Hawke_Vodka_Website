"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

require("react-app-polyfill/ie11");

require("react-app-polyfill/stable");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxLocalstorageSimple = require("redux-localstorage-simple");

var _reactRedux = require("react-redux");

var _productActions = require("./redux/actions/productActions");

var _rootReducer = _interopRequireDefault(require("./redux/reducers/rootReducer"));

var _products = _interopRequireDefault(require("./data/products.json"));

var _App = _interopRequireDefault(require("./App"));

require("./assets/scss/style.scss");

var serviceWorker = _interopRequireWildcard(require("./serviceWorker"));

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _app = require("firebase/app");

var _analytics = require("firebase/analytics");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var store = (0, _redux.createStore)(_rootReducer.default, (0, _reduxLocalstorageSimple.load)(), (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk.default, (0, _reduxLocalstorageSimple.save)()))); // fetch products from json file

store.dispatch((0, _productActions.fetchProducts)(_products.default));
var firebaseConfig = {
  apiKey: "AIzaSyAUuLcZ3DGderbhff7YXom3nm9TFLMY1bY",
  authDomain: "hawke-prohibition.firebaseapp.com",
  projectId: "hawke-prohibition",
  storageBucket: "hawke-prohibition.appspot.com",
  messagingSenderId: "887683857141",
  appId: "1:887683857141:web:1f1eb74c06aa452fd4e3bc",
  measurementId: "G-8JK1YY7HBS"
};
var app = (0, _app.initializeApp)(firebaseConfig);
var analytics = (0, _analytics.getAnalytics)(app);

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
  store: store
}, /*#__PURE__*/_react.default.createElement(_App.default, null)), document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


serviceWorker.register();