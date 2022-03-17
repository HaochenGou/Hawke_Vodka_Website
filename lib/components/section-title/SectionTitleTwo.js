"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var SectionTitleTwo = function SectionTitleTwo(_ref) {
  var titleText = _ref.titleText,
      subTitleText = _ref.subTitleText,
      positionClass = _ref.positionClass,
      spaceClass = _ref.spaceClass;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "section-title-2 ".concat(positionClass ? positionClass : "", " ").concat(spaceClass ? spaceClass : "")
  }, /*#__PURE__*/_react.default.createElement("h2", null, titleText), /*#__PURE__*/_react.default.createElement("p", null, subTitleText));
};

SectionTitleTwo.propTypes = {
  positionClass: _propTypes.default.string,
  spaceClass: _propTypes.default.string,
  subTitleText: _propTypes.default.string,
  titleText: _propTypes.default.string
};
var _default = SectionTitleTwo;
exports.default = _default;