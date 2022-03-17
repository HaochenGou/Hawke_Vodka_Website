"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var FooterCopyright = function FooterCopyright(_ref) {
  var footerLogo = _ref.footerLogo,
      spaceBottomClass = _ref.spaceBottomClass;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "copyright ".concat(spaceBottomClass ? spaceBottomClass : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-logo"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "",
    src: process.env.PUBLIC_URL + footerLogo
  }))), /*#__PURE__*/_react.default.createElement("p", null, "\xA9 2022", " ", /*#__PURE__*/_react.default.createElement("a", {
    href: "//github.com/HaochenGou",
    rel: "noopener noreferrer",
    target: "_blank"
  }, "Hawke Prohibition Distilleries"), ".", /*#__PURE__*/_react.default.createElement("br", null), " All Rights Reserved"));
};

FooterCopyright.propTypes = {
  footerLogo: _propTypes.default.string,
  spaceBottomClass: _propTypes.default.string
};
var _default = FooterCopyright;
exports.default = _default;