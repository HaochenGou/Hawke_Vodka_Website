"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var CategoryOneSingle = function CategoryOneSingle(_ref) {
  var data = _ref.data,
      sliderClass = _ref.sliderClass;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "collection-product-2 ".concat(sliderClass ? sliderClass : "")
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + data.link
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: process.env.PUBLIC_URL + data.image,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "collection-content-2 text-center"
  }, /*#__PURE__*/_react.default.createElement("span", null, data.subtitle), /*#__PURE__*/_react.default.createElement("h4", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + data.link
  }, data.title))));
};

CategoryOneSingle.propTypes = {
  data: _propTypes.default.object,
  sliderClass: _propTypes.default.string
};
var _default = CategoryOneSingle;
exports.default = _default;