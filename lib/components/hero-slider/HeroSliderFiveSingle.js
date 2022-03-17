"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var HeroSliderFiveSingle = function HeroSliderFiveSingle() {
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Carousel, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Carousel.Item, null, /*#__PURE__*/_react.default.createElement("img", {
    className: "d-block w-100",
    src: "/assets/img/slider/slider-1.webp",
    alt: "First slide"
  })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Carousel.Item, null, /*#__PURE__*/_react.default.createElement("img", {
    className: "d-block w-100",
    src: "/assets/img/slider/slider-2.webp",
    alt: "Second slide"
  })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Carousel.Item, null, /*#__PURE__*/_react.default.createElement("img", {
    className: "d-block w-100",
    src: "/assets/img/slider/slider-3.webp",
    alt: "Third slide"
  })));
};

HeroSliderFiveSingle.propTypes = {
  data: _propTypes.default.object,
  sliderClass: _propTypes.default.string
};
var _default = HeroSliderFiveSingle;
exports.default = _default;