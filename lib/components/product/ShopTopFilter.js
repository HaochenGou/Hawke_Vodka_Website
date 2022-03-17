"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _product = require("../../helpers/product");

var ShopTopFilter = function ShopTopFilter(_ref) {
  var products = _ref.products,
      getSortParams = _ref.getSortParams;
  var uniqueCategories = (0, _product.getUniqueCategories)(products);
  var uniqueColors = (0, _product.getUniqueColors)(products);
  var uniqueSizes = (0, _product.getProductsUniqueSizes)(products);
  var uniqueTags = (0, _product.getUniqueTags)(products);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "product-filter-wrapper",
    id: "product-filter-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "product-filter-wrapper__inner"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-3 col-sm-6 col-xs-12 mb-30"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "product-filter"
  }, /*#__PURE__*/_react.default.createElement("h5", null, "Categories"), uniqueCategories ? /*#__PURE__*/_react.default.createElement("ul", null, uniqueCategories.map(function (category, key) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: key
    }, /*#__PURE__*/_react.default.createElement("button", {
      onClick: function onClick(e) {
        getSortParams("category", category);
        (0, _product.setActiveSort)(e);
      }
    }, category));
  })) : "No categories found")), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-3 col-sm-6 col-xs-12 mb-30"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "product-filter"
  }, /*#__PURE__*/_react.default.createElement("h5", null, "Color"), uniqueColors ? /*#__PURE__*/_react.default.createElement("ul", null, uniqueColors.map(function (color, key) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: key
    }, /*#__PURE__*/_react.default.createElement("button", {
      onClick: function onClick(e) {
        getSortParams("color", color);
        (0, _product.setActiveSort)(e);
      }
    }, color));
  })) : "No colors found")), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-3 col-sm-6 col-xs-12 mb-30"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "product-filter"
  }, /*#__PURE__*/_react.default.createElement("h5", null, "Size"), uniqueSizes ? /*#__PURE__*/_react.default.createElement("ul", null, uniqueSizes.map(function (size, key) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: key
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "text-uppercase",
      onClick: function onClick(e) {
        getSortParams("size", size);
        (0, _product.setActiveSort)(e);
      }
    }, size));
  })) : "No sizes found")), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-3 col-sm-6 col-xs-12 mb-30"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "product-filter product-filter--tag"
  }, /*#__PURE__*/_react.default.createElement("h5", null, "Tag"), uniqueTags ? /*#__PURE__*/_react.default.createElement("ul", null, uniqueTags.map(function (tag, key) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: key
    }, /*#__PURE__*/_react.default.createElement("button", {
      onClick: function onClick(e) {
        getSortParams("tag", tag);
        (0, _product.setActiveSort)(e);
      }
    }, tag));
  })) : "No tags found")))));
};

ShopTopFilter.propTypes = {
  getSortParams: _propTypes.default.func,
  products: _propTypes.default.array
};
var _default = ShopTopFilter;
exports.default = _default;