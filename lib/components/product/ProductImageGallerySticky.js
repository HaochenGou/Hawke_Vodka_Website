"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var productImageGallerySticky = function productImageGallerySticky(_ref) {
  var product = _ref.product;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "product-large-image-wrapper product-large-image-wrapper--sticky"
  }, product.discount || product.new ? /*#__PURE__*/_react.default.createElement("div", {
    className: "product-img-badges"
  }, product.discount ? /*#__PURE__*/_react.default.createElement("span", {
    className: "pink"
  }, "-", product.discount, "%") : "", product.new ? /*#__PURE__*/_react.default.createElement("span", {
    className: "purple"
  }, "New") : "") : "", /*#__PURE__*/_react.default.createElement("div", {
    className: "product-sticky-image mb--10"
  }, product.image && product.image.map(function (single, key) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "product-sticky-image__single mb-10",
      key: key
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: process.env.PUBLIC_URL + single,
      alt: "",
      className: "img-fluid"
    }));
  })));
};

productImageGallerySticky.propTypes = {
  product: _propTypes.default.object
};
var _default = productImageGallerySticky;
exports.default = _default;