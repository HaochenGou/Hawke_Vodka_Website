"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var Logo = function Logo(_ref) {
  var imageUrl = _ref.imageUrl,
      logoClass = _ref.logoClass;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(logoClass ? logoClass : "")
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "",
    src: process.env.PUBLIC_URL + imageUrl
  })));
};

Logo.propTypes = {
  imageUrl: _propTypes.default.string,
  logoClass: _propTypes.default.string
};
var _default = Logo;
exports.default = _default;