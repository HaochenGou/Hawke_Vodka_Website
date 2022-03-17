"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var SectionTitleWithText = function SectionTitleWithText(_ref) {
  var spaceTopClass = _ref.spaceTopClass,
      spaceBottomClass = _ref.spaceBottomClass;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "welcome-area ".concat(spaceTopClass ? spaceTopClass : "", " ").concat(spaceBottomClass ? spaceBottomClass : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "welcome-content text-center"
  }, /*#__PURE__*/_react.default.createElement("h5", null, "Our Commitment"), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      margin: "100px"
    }
  }), /*#__PURE__*/_react.default.createElement("h1", null, "We have distilled life down to what\u2019s important and how to move forward with smiles and love in our hearts."), /*#__PURE__*/_react.default.createElement("p", null, "At Hawke Prohibition Distilleries and years behind us, we have realized that life and business are one of the same. Cool is everything, it means you live well, chase dreams and elevate those around you. Enjoy, it\u2019s smiles, love, embracing all things positive. Have fun, with playful hearts the day-to- day grind becomes bright and cheerful with pleasant surprises around every corner.", " "))));
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: _propTypes.default.string,
  spaceTopClass: _propTypes.default.string
};
var _default = SectionTitleWithText;
exports.default = _default;