"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIdSwiper = _interopRequireDefault(require("react-id-swiper"));

var _heroSliderTwo = _interopRequireDefault(require("../../data/hero-sliders/hero-slider-two.json"));

var _HeroSliderTwoSingle = _interopRequireDefault(require("../../components/hero-slider/HeroSliderTwoSingle.js"));

var HeroSliderTwo = function HeroSliderTwo() {
  var params = {
    effect: "fade",
    loop: false,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "slider-area"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "slider-active nav-style-1"
  }, /*#__PURE__*/_react.default.createElement(_reactIdSwiper.default, params, _heroSliderTwo.default && _heroSliderTwo.default.map(function (single, key) {
    return /*#__PURE__*/_react.default.createElement(_HeroSliderTwoSingle.default, {
      sliderClassName: "swiper-slide",
      data: single,
      key: key
    });
  }))));
};

var _default = HeroSliderTwo;
exports.default = _default;