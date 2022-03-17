"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var HeroSliderTwoSingle = function HeroSliderTwoSingle(_ref) {
  var data = _ref.data,
      sliderClassName = _ref.sliderClassName;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "single-slider single-slider-10 slider-height-8 bg-aqua ".concat(sliderClassName ? sliderClassName : ""),
    style: {
      backgroundImage: "url('/assets/img/slider/slider.webp')",
      backgroundrepeat: "no-repeat",
      backgroundsize: "100% 100%",
      alt: "background"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-12 col-sm-6 d-flex align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "slider-content slider-content-10 slider-animated-2"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "animated"
  }, data.title), /*#__PURE__*/_react.default.createElement("h1", {
    className: "animated"
  }, data.subtitle))))));
};

HeroSliderTwoSingle.propTypes = {
  data: _propTypes.default.object,
  sliderClassName: _propTypes.default.string
};
var _default = HeroSliderTwoSingle;
exports.default = _default;