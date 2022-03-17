"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var HeroSliderOneSingle = function HeroSliderOneSingle(_ref) {
  var data = _ref.data,
      sliderClassName = _ref.sliderClassName;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "single-slider slider-height-1 bg-purple ".concat(sliderClassName ? sliderClassName : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "slider-content slider-animated-1"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "animated"
  }, data.title), /*#__PURE__*/_react.default.createElement("h1", {
    className: "animated"
  }, data.subtitle), /*#__PURE__*/_react.default.createElement("div", {
    className: "slider-btn btn-hover"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "animated",
    to: process.env.PUBLIC_URL + data.url
  }, "SHOP NOW")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "slider-single-img slider-animated-1"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "animated img-fluid",
    src: process.env.PUBLIC_URL + data.image,
    alt: ""
  }))))));
};

HeroSliderOneSingle.propTypes = {
  data: _propTypes.default.object,
  sliderClassName: _propTypes.default.string
};
var _default = HeroSliderOneSingle;
exports.default = _default;