"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var ProductImageFixed = function ProductImageFixed(_ref) {
  var product = _ref.product;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "product-large-image-wrapper"
  }, product.discount || product.new ? /*#__PURE__*/_react.default.createElement("div", {
    className: "product-img-badges"
  }, product.discount ? /*#__PURE__*/_react.default.createElement("span", {
    className: "pink"
  }, "-", product.discount, "%") : "", product.new ? /*#__PURE__*/_react.default.createElement("span", {
    className: "purple"
  }, "New") : "") : "", /*#__PURE__*/_react.default.createElement("div", {
    className: "product"
  }, product.image ? /*#__PURE__*/_react.default.createElement("img", {
    src: process.env.PUBLIC_URL + product.image[0],
    alt: product.alt,
    className: "img-fluid"
  }) : ""));
};

ProductImageFixed.propTypes = {
  product: _propTypes.default.object
};
var _default = ProductImageFixed;
exports.default = _default;