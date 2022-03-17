"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _textGridOne = _interopRequireDefault(require("../../data/text-grid/text-grid-one.json"));

var _TextGridOneSingle = _interopRequireDefault(require("../../components/text-grid/TextGridOneSingle.js"));

var TextGridOne = function TextGridOne(_ref) {
  var spaceBottomClass = _ref.spaceBottomClass;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "about-mission-area ".concat(spaceBottomClass ? spaceBottomClass : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, _textGridOne.default && _textGridOne.default.map(function (single, key) {
    return /*#__PURE__*/_react.default.createElement(_TextGridOneSingle.default, {
      data: single,
      spaceBottomClass: "mb-30",
      key: key
    });
  }))));
};

TextGridOne.propTypes = {
  spaceBottomClass: _propTypes.default.string
};
var _default = TextGridOne;
exports.default = _default;