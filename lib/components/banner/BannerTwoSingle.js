"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var BannerTwoSingle = function BannerTwoSingle(_ref) {
  var data = _ref.data,
      spaceBottomClass = _ref.spaceBottomClass;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-6 col-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "single-banner ".concat(spaceBottomClass ? spaceBottomClass : "")
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + data.link
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: process.env.PUBLIC_URL + data.image,
    alt: ""
  }))));
};

BannerTwoSingle.propTypes = {
  data: _propTypes.default.object,
  spaceBottomClass: _propTypes.default.string
};
var _default = BannerTwoSingle;
exports.default = _default;