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

var _reactBreadcrumbsDynamic = require("react-breadcrumbs-dynamic");

var _LayoutOne = _interopRequireDefault(require("../../layouts/LayoutOne"));

var _Breadcrumb = _interopRequireDefault(require("../../wrappers/breadcrumb/Breadcrumb"));

var _BrandLogoSliderOne = _interopRequireDefault(require("../../wrappers/brand-logo/BrandLogoSliderOne"));

var _Tab = _interopRequireDefault(require("react-bootstrap/Tab"));

var _Nav = _interopRequireDefault(require("react-bootstrap/Nav"));

var _reactRouterDom = require("react-router-dom");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Wholesale = function Wholesale(_ref) {
  var location = _ref.location;
  var pathname = location.pathname;
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactMetaTags.default, null, /*#__PURE__*/_react.default.createElement("title", null, "Hawke Vodka | Shop Sign "), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: "About page of Hawke Prohibition Distilleries."
  })), /*#__PURE__*/_react.default.createElement(_reactBreadcrumbsDynamic.BreadcrumbsItem, {
    to: process.env.PUBLIC_URL + "/"
  }, "Home"), /*#__PURE__*/_react.default.createElement(_reactBreadcrumbsDynamic.BreadcrumbsItem, {
    to: process.env.PUBLIC_URL + pathname
  }, "Wholesale"), /*#__PURE__*/_react.default.createElement(_LayoutOne.default, {
    headerTop: "visible"
  }, /*#__PURE__*/_react.default.createElement(_Breadcrumb.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "login-register-area pt-100 pb-100"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-7 col-md-12 ml-auto mr-auto"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "login-register-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_Tab.default.Container, {
    defaultActiveKey: "login"
  }, /*#__PURE__*/_react.default.createElement(_Nav.default, {
    variant: "pills",
    className: "login-register-tab-list"
  }, /*#__PURE__*/_react.default.createElement(_Nav.default.Item, null, /*#__PURE__*/_react.default.createElement(_Nav.default.Link, {
    eventKey: "login"
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Login"))), /*#__PURE__*/_react.default.createElement(_Nav.default.Item, null, /*#__PURE__*/_react.default.createElement(_Nav.default.Link, {
    eventKey: "register"
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Register")))), /*#__PURE__*/_react.default.createElement(_Tab.default.Content, null, /*#__PURE__*/_react.default.createElement(_Tab.default.Pane, {
    eventKey: "login"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "login-form-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "login-register-form"
  }, /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "user-name",
    placeholder: "Username"
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "password",
    name: "user-password",
    placeholder: "Password"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "button-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "login-toggle-btn"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/my-account"
  }, "Forgot Password?")), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Login"))))))), /*#__PURE__*/_react.default.createElement(_Tab.default.Pane, {
    eventKey: "register"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "login-form-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "login-register-form"
  }, /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "user-name",
    placeholder: "Username"
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "password",
    name: "user-password",
    placeholder: "Password"
  }), /*#__PURE__*/_react.default.createElement("input", {
    name: "user-email",
    placeholder: "Email",
    type: "email"
  }), /*#__PURE__*/_react.default.createElement("input", {
    name: "user-address",
    placeholder: "Address",
    type: "address"
  }), /*#__PURE__*/_react.default.createElement("input", {
    name: "user-phone",
    placeholder: "Phone",
    type: "phone"
  }), /*#__PURE__*/_react.default.createElement("input", {
    name: "user-license",
    placeholder: "License",
    type: "license"
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox"
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "ml-10"
  }, "By click the box, I consent to receive newsletters via email."), /*#__PURE__*/_react.default.createElement("div", {
    className: "button-box"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "submit"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Register")))))))))))))), /*#__PURE__*/_react.default.createElement(_BrandLogoSliderOne.default, {
    spaceBottomClass: "pb-70"
  })));
};

Wholesale.propTypes = {
  location: _propTypes.default.object
};
var _default = Wholesale;
exports.default = _default;