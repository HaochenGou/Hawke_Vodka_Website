"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var HeroSliderFourSingle = function HeroSliderFourSingle(_ref) {
  var data = _ref.data,
      sliderClass = _ref.sliderClass;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "slider-height-9 bg-gray-2 d-flex align-items-center ".concat(sliderClass ? sliderClass : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row align-items-center slider-h11-mrg"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-12 col-sm-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "slider-content-11 slider-animated-1"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "animated"
  }, data.title), /*#__PURE__*/_react.default.createElement("h1", {
    className: "animated"
  }, data.subtitle), /*#__PURE__*/_react.default.createElement("div", {
    className: "slider-btn-11 btn-hover"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "animated",
    to: process.env.PUBLIC_URL + data.url
  }, "SHOP NOW")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 col-md-6 col-12 col-sm-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "slider-singleimg-hm11 slider-animated-1"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "animated",
    src: process.env.PUBLIC_URL + data.image,
    alt: ""
  }))))));
};

HeroSliderFourSingle.propTypes = {
  data: _propTypes.default.object,
  sliderClass: _propTypes.default.string
};
var _default = HeroSliderFourSingle;
exports.default = _default;