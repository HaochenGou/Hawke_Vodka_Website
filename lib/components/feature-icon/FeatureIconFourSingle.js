"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var FeatureIconFourSingle = function FeatureIconFourSingle(_ref) {
  var data = _ref.data,
      spaceBottomClass = _ref.spaceBottomClass;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "support-wrap-3 text-center ".concat(spaceBottomClass ? spaceBottomClass : ""),
    style: {
      backgroundColor: "".concat(data.backgroundColor)
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "support-icon-2"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "animated",
    src: process.env.PUBLIC_URL + data.iconImage,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "support-content-3"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: process.env.PUBLIC_URL + data.titleImage,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("p", null, data.title))));
};

FeatureIconFourSingle.propTypes = {
  data: _propTypes.default.object,
  spaceBottomClass: _propTypes.default.string
};
var _default = FeatureIconFourSingle;
exports.default = _default;