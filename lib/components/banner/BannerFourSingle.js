"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var BannerFourSingle = function BannerFourSingle(_ref) {
  var data = _ref.data,
      spaceBottomClass = _ref.spaceBottomClass;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-4 col-md-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "single-banner banner-shape banner-green-color ".concat(spaceBottomClass ? spaceBottomClass : "")
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + data.link
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: process.env.PUBLIC_URL + data.image,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "banner-content"
  }, /*#__PURE__*/_react.default.createElement("h3", null, data.title), /*#__PURE__*/_react.default.createElement("h4", null, data.subtitle, " ", /*#__PURE__*/_react.default.createElement("span", null, data.price)), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + data.link
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-long-arrow-right"
  })))));
};

BannerFourSingle.propTypes = {
  data: _propTypes.default.object,
  spaceBottomClass: _propTypes.default.string
};
var _default = BannerFourSingle;
exports.default = _default;