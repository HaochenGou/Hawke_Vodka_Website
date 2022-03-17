"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIdSwiper = _interopRequireDefault(require("react-id-swiper"));

var _heroSliderThree = _interopRequireDefault(require("../../data/hero-sliders/hero-slider-three.json"));

var _HeroSliderThreeSingle = _interopRequireDefault(require("../../components/hero-slider/HeroSliderThreeSingle.js"));

var HeroSliderThree = function HeroSliderThree() {
  var params = {
    effect: "fade",
    loop: true,
    speed: 300,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true
    },
    watchSlidesVisibility: true
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "slider-area"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "slider-active nav-style-1"
  }, /*#__PURE__*/_react.default.createElement(_reactIdSwiper.default, params, _heroSliderThree.default && _heroSliderThree.default.map(function (single, key) {
    return /*#__PURE__*/_react.default.createElement(_HeroSliderThreeSingle.default, {
      data: single,
      key: key,
      sliderClass: "swiper-slide"
    });
  }))));
};

var _default = HeroSliderThree;
exports.default = _default;