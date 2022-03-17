"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var FeatureIconSingle = function FeatureIconSingle(_ref) {
  var singleFeature = _ref.singleFeature;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-3 col-sm-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "support-wrap mb-30"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "support-icon"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "animated",
    src: process.env.PUBLIC_URL + singleFeature.image,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "support-content"
  }, /*#__PURE__*/_react.default.createElement("h5", null, singleFeature.title), /*#__PURE__*/_react.default.createElement("p", null, singleFeature.subtitle))));
};

FeatureIconSingle.propTypes = {
  singleFeature: _propTypes.default.object
};
var _default = FeatureIconSingle;
exports.default = _default;