"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactBootstrap = require("react-bootstrap");

require("./HeroSlider.css");

var HeroSliderThreeSingle = function HeroSliderThreeSingle(_ref) {
  var data = _ref.data,
      sliderClass = _ref.sliderClass;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "slider-height-7 bg-glaucous d-flex align-items-center ".concat(sliderClass ? sliderClass : "")
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, {
    fluid: true
  }, /*#__PURE__*/_react.default.createElement("video", {
    autoPlay: true,
    muted: true,
    loop: true,
    className: "videoStyle"
  }, /*#__PURE__*/_react.default.createElement("source", {
    src: "/assets/img/background.webm",
    type: "video/webm",
    alt: "backgroud"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row align-items-left slider-h9-mrg"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 col-md-6 col-12 col-sm-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "slider-singleimg-hm9 slider-animated-1"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "animated",
    src: process.env.PUBLIC_URL + data.image,
    alt: ""
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 col-md-6 col-12 col-sm-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "slider-content-7 slider-animated-1"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "animated"
  }, data.title), /*#__PURE__*/_react.default.createElement("h1", {
    className: "animated"
  }, data.subtitle), /*#__PURE__*/_react.default.createElement("div", {
    className: "slider-btn-9 btn-hover"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "animated",
    to: process.env.PUBLIC_URL + data.url
  }, "BUY NOW"))))))));
};

HeroSliderThreeSingle.propTypes = {
  data: _propTypes.default.object,
  sliderClass: _propTypes.default.string
};
var _default = HeroSliderThreeSingle;
exports.default = _default;