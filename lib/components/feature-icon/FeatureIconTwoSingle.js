"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var FeatureIconTwoSingle = function FeatureIconTwoSingle(_ref) {
  var data = _ref.data,
      spaceBottomClass = _ref.spaceBottomClass,
      textAlignClass = _ref.textAlignClass;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "support-wrap-2 support-shape ".concat(spaceBottomClass ? spaceBottomClass : "", " ").concat(textAlignClass ? textAlignClass : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "support-content-2"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "animated",
    src: process.env.PUBLIC_URL + data.image,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h5", null, data.title), /*#__PURE__*/_react.default.createElement("p", null, data.subtitle))));
};

FeatureIconTwoSingle.propTypes = {
  data: _propTypes.default.object,
  spaceBottomClass: _propTypes.default.string,
  textAlignClass: _propTypes.default.string
};
var _default = FeatureIconTwoSingle;
exports.default = _default;