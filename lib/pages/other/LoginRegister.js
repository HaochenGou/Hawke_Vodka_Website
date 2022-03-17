"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactMetaTags = _interopRequireDefault(require("react-meta-tags"));

var _reactRouterDom = require("react-router-dom");

var _reactBreadcrumbsDynamic = require("react-breadcrumbs-dynamic");

var _Tab = _interopRequireDefault(require("react-bootstrap/Tab"));

var _Nav = _interopRequireDefault(require("react-bootstrap/Nav"));

var _LayoutOne = _interopRequireDefault(require("../../layouts/LayoutOne"));

var _Breadcrumb = _interopRequireDefault(require("../../wrappers/breadcrumb/Breadcrumb"));

var _reactNativeWebview = require("react-native-webview");

var _reactNative = require("react-native");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var LoginRegister = function LoginRegister(_ref) {
  var location = _ref.location;
  var pathname = location.pathname;
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactMetaTags.default, null, /*#__PURE__*/_react.default.createElement("title", null, "Hawke Vodka | Login"), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: "Compare page of flone Hawke Prohibition Distilleries."
  })), /*#__PURE__*/_react.default.createElement(_reactBreadcrumbsDynamic.BreadcrumbsItem, {
    to: process.env.PUBLIC_URL + "/"
  }, "Home"), /*#__PURE__*/_react.default.createElement(_reactBreadcrumbsDynamic.BreadcrumbsItem, {
    to: process.env.PUBLIC_URL + pathname
  }, "Login Register"), /*#__PURE__*/_react.default.createElement(_LayoutOne.default, {
    headerTop: "visible"
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNativeWebview.WebView, {
    source: {
      uri: 'https://baby-x-vodka.myshopify.com/account/'
    },
    style: {
      marginTop: 20
    }
  })), /*#__PURE__*/_react.default.createElement(_Breadcrumb.default, null)));
};

LoginRegister.propTypes = {
  location: _propTypes.default.object
};
var _default = LoginRegister;
exports.default = _default;