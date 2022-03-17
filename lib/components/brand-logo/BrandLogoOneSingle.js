"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var BrandLogoOneSingle = function BrandLogoOneSingle(_ref) {
  var data = _ref.data,
      sliderClassName = _ref.sliderClassName,
      spaceBottomClass = _ref.spaceBottomClass;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "single-brand-logo ".concat(sliderClassName ? sliderClassName : "", " ").concat(spaceBottomClass ? spaceBottomClass : "")
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: process.env.PUBLIC_URL + data.image,
    alt: data.alt
  }));
};

BrandLogoOneSingle.propTypes = {
  data: _propTypes.default.object,
  sliderClassName: _propTypes.default.string,
  spaceBottomClass: _propTypes.default.string
};
var _default = BrandLogoOneSingle;
exports.default = _default;