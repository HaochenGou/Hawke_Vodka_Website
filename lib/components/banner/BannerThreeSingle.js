"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var BannerThreeSingle = function BannerThreeSingle(_ref) {
  var data = _ref.data,
      spaceBottomClass = _ref.spaceBottomClass;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 col-md-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "single-banner-2 ".concat(spaceBottomClass ? spaceBottomClass : "")
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + data.link
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: process.env.PUBLIC_URL + data.image,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "banner-content-2"
  }, /*#__PURE__*/_react.default.createElement("h3", null, data.title), /*#__PURE__*/_react.default.createElement("h4", null, data.subtitle, " ", /*#__PURE__*/_react.default.createElement("span", null, data.price)))));
};

BannerThreeSingle.propTypes = {
  data: _propTypes.default.object,
  spaceBottomClass: _propTypes.default.string
};
var _default = BannerThreeSingle;
exports.default = _default;