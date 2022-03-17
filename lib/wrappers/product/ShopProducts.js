"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _ProductgridList = _interopRequireDefault(require("./ProductgridList"));

var ShopProducts = function ShopProducts(_ref) {
  var products = _ref.products,
      layout = _ref.layout;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "shop-bottom-area mt-35"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row ".concat(layout ? layout : "")
  }, /*#__PURE__*/_react.default.createElement(_ProductgridList.default, {
    products: products,
    spaceBottomClass: "mb-25"
  })));
};

ShopProducts.propTypes = {
  layout: _propTypes.default.string,
  products: _propTypes.default.array
};
var _default = ShopProducts;
exports.default = _default;