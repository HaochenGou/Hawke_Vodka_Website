"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _scrollTop = _interopRequireDefault(require("./helpers/scroll-top"));

var _reactRouterDom = require("react-router-dom");

var _reactToastNotifications = require("react-toast-notifications");

var _reduxMultilanguage = require("redux-multilanguage");

var _reactRedux = require("react-redux");

require("react-toastify/dist/ReactToastify.css");

var _reactBreadcrumbsDynamic = require("react-breadcrumbs-dynamic");

var _HomeElectronics = _interopRequireDefault(require("./pages/home/HomeElectronics"));

var _ShopListStandard = _interopRequireDefault(require("./pages/shop/ShopListStandard"));

var _ProductFixedImage = _interopRequireDefault(require("./pages/shop-product/ProductFixedImage"));

var _Friend = _interopRequireDefault(require("./pages/other/Friend"));

var _TechServices = _interopRequireDefault(require("./pages/other/TechServices"));

var _web = _interopRequireDefault(require("./pages/other/web"));

var _Whole = _interopRequireDefault(require("./pages/other/Whole"));

var _About = _interopRequireDefault(require("./pages/other/About"));

var _Contact = _interopRequireDefault(require("./pages/other/Contact"));

var _MyAccount = _interopRequireDefault(require("./pages/other/MyAccount"));

var _LoginRegister = _interopRequireDefault(require("./pages/other/LoginRegister"));

var _Recipes = _interopRequireDefault(require("./pages/other/Recipes"));

var _Cart = _interopRequireDefault(require("./pages/other/Cart"));

var _Wishlist = _interopRequireDefault(require("./pages/other/Wishlist"));

var _Compare = _interopRequireDefault(require("./pages/other/Compare"));

var _Checkout = _interopRequireDefault(require("./pages/other/Checkout"));

var _silk = _interopRequireDefault(require("./pages/other/silk"));

var _quickbuy = _interopRequireDefault(require("./pages/other/quickbuy"));

var _NotFound = _interopRequireDefault(require("./pages/other/NotFound"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// home pages
// shop pages
// product pages
// other pages
var App = function App(props) {
  (0, _react.useEffect)(function () {
    props.dispatch((0, _reduxMultilanguage.loadLanguages)({
      languages: {
        en: require("./translations/english.json"),
        fn: require("./translations/french.json"),
        de: require("./translations/germany.json")
      }
    }));
  });
  return /*#__PURE__*/_react.default.createElement(_reactToastNotifications.ToastProvider, {
    placement: "bottom-left"
  }, /*#__PURE__*/_react.default.createElement(_reactBreadcrumbsDynamic.BreadcrumbsProvider, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_scrollTop.default, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: process.env.PUBLIC_URL + "/",
    component: _HomeElectronics.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: process.env.PUBLIC_URL + "/shop",
    component: _ShopListStandard.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: process.env.PUBLIC_URL + "/product/:id",
    component: _ProductFixedImage.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: process.env.PUBLIC_URL + "/about",
    component: _About.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: process.env.PUBLIC_URL + "/buy",
    component: _quickbuy.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: process.env.PUBLIC_URL + "/wholesale",
    component: _Whole.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: process.env.PUBLIC_URL + "/contact",
    component: _Contact.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: process.env.PUBLIC_URL + "/my-account",
    component: _MyAccount.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: process.env.PUBLIC_URL + "/login-register",
    component: _LoginRegister.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: process.env.PUBLIC_URL + "/silk",
    component: _silk.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: process.env.PUBLIC_URL + "/cart",
    component: _Cart.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: process.env.PUBLIC_URL + "/friend",
    component: _Friend.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: process.env.PUBLIC_URL + "/web",
    component: _web.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: process.env.PUBLIC_URL + "/tech",
    component: _TechServices.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: process.env.PUBLIC_URL + "/recipes",
    component: _Recipes.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: process.env.PUBLIC_URL + "/wishlist",
    component: _Wishlist.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: process.env.PUBLIC_URL + "/compare",
    component: _Compare.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: process.env.PUBLIC_URL + "/checkout",
    component: _Checkout.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: process.env.PUBLIC_URL + "/not-found",
    component: _NotFound.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    component: _NotFound.default
  }))))));
};

App.propTypes = {
  dispatch: _propTypes.default.func
};

var _default = (0, _reactRedux.connect)()((0, _reduxMultilanguage.multilanguage)(App));

exports.default = _default;