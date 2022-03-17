"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _product = require("../../helpers/product");

var ShopCategories = function ShopCategories(_ref) {
  var categories = _ref.categories,
      getSortParams = _ref.getSortParams;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-widget"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "pro-sidebar-title"
  }, "Categories "), /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-widget-list mt-30"
  }, categories ? /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-widget-list-left"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick(e) {
      getSortParams("category", "");
      (0, _product.setActiveSort)(e);
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "checkmark"
  }), " All Categories"))), categories.map(function (category, key) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: key
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "sidebar-widget-list-left"
    }, /*#__PURE__*/_react.default.createElement("button", {
      onClick: function onClick(e) {
        getSortParams("category", category);
        (0, _product.setActiveSort)(e);
      }
    }, " ", /*#__PURE__*/_react.default.createElement("span", {
      className: "checkmark"
    }), " ", category, " ")));
  })) : "No categories found"));
};

ShopCategories.propTypes = {
  categories: _propTypes.default.array,
  getSortParams: _propTypes.default.func
};
var _default = ShopCategories;
exports.default = _default;