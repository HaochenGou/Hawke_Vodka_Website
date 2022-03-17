"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _HeroSliderFiveSingle = _interopRequireDefault(require("../../components/hero-slider/HeroSliderFiveSingle.js"));

var HeroSliderFive = function HeroSliderFive() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "slider-active nav-style-1"
  }, /*#__PURE__*/_react.default.createElement(_HeroSliderFiveSingle.default, null), ");"));
};

var _default = HeroSliderFive;
exports.default = _default;