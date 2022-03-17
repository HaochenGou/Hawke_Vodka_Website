"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reduxMultilanguage = require("redux-multilanguage");

var NavMenu = function NavMenu(_ref) {
  var strings = _ref.strings;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "main-menu"
  }, /*#__PURE__*/_react.default.createElement("nav", null, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/"
  }, strings["home"])), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/shop"
  }, " ", strings["shop"], " ", /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-angle-down"
  }), " "), /*#__PURE__*/_react.default.createElement("ul", {
    className: "submenu"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/cart"
  }, strings["cart"])), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/wishlist"
  }, strings["wishlist"])))))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/about"
  }, strings["about_us"])), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/contact"
  }, " ", strings["contact_us"], /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-angle-down"
  }), " "), /*#__PURE__*/_react.default.createElement("ul", {
    className: "submenu"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/wholesale"
  }, strings["wholesale"]))), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/buy"
  }, strings["wholesale"])))))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/recipes"
  }, strings["recipes"])), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/tech"
  }, " ", strings["tech"], " ", /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-angle-down"
  }), " "), /*#__PURE__*/_react.default.createElement("ul", {
    className: "submenu"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/silk"
  }, strings["silk"])), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/web"
  }, strings["web"])))))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/friend"
  }, strings["friend"])))));
};

NavMenu.propTypes = {
  strings: _propTypes.default.object
};

var _default = (0, _reduxMultilanguage.multilanguage)(NavMenu);

exports.default = _default;