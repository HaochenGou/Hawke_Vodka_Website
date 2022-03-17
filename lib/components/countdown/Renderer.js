"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var Renderer = function Renderer(_ref) {
  var days = _ref.days,
      hours = _ref.hours,
      minutes = _ref.minutes,
      seconds = _ref.seconds;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "timer timer-style"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "cdown day"
  }, days, " ", /*#__PURE__*/_react.default.createElement("p", null, "Days")), /*#__PURE__*/_react.default.createElement("span", {
    className: "cdown hour"
  }, hours, " ", /*#__PURE__*/_react.default.createElement("p", null, "Hours")), /*#__PURE__*/_react.default.createElement("span", {
    className: "cdown minutes"
  }, minutes, " ", /*#__PURE__*/_react.default.createElement("p", null, "Minutes")), /*#__PURE__*/_react.default.createElement("span", null, seconds, " ", /*#__PURE__*/_react.default.createElement("p", null, "Secs"))));
};

Renderer.propTypes = {
  days: _propTypes.default.number,
  hours: _propTypes.default.number,
  minutes: _propTypes.default.number,
  seconds: _propTypes.default.number
};
var _default = Renderer;
exports.default = _default;