"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var FeatureIconThreeSingle = function FeatureIconThreeSingle(_ref) {
  var data = _ref.data,
      spaceBottomClass = _ref.spaceBottomClass;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-4 col-md-4 col-sm-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "support-wrap-2 support-padding-2 support-shape-2 text-center ".concat(spaceBottomClass ? spaceBottomClass : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "support-content-2"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "animated",
    src: process.env.PUBLIC_URL + data.image,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h5", null, data.title), /*#__PURE__*/_react.default.createElement("p", null, data.subtitle))));
};

FeatureIconThreeSingle.propTypes = {
  data: _propTypes.default.object,
  spaceBottomClass: _propTypes.default.string
};
var _default = FeatureIconThreeSingle;
exports.default = _default;