"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var TestimonialOneSingle = function TestimonialOneSingle(_ref) {
  var data = _ref.data,
      sliderClass = _ref.sliderClass;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "single-testimonial text-center ".concat(sliderClass ? sliderClass : "")
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: process.env.PUBLIC_URL + data.image,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("p", null, data.content), /*#__PURE__*/_react.default.createElement("div", {
    className: "client-info"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-map-signs"
  }), /*#__PURE__*/_react.default.createElement("h5", null, data.customerName), /*#__PURE__*/_react.default.createElement("span", null, data.title)));
};

TestimonialOneSingle.propTypes = {
  data: _propTypes.default.object,
  sliderClass: _propTypes.default.string
};
var _default = TestimonialOneSingle;
exports.default = _default;