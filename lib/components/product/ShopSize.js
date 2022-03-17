"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _product = require("../../helpers/product");

var ShopSize = function ShopSize(_ref) {
  var sizes = _ref.sizes,
      getSortParams = _ref.getSortParams;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-widget mt-40"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "pro-sidebar-title"
  }, "Size "), /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-widget-list mt-20"
  }, sizes ? /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-widget-list-left"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick(e) {
      getSortParams("size", "");
      (0, _product.setActiveSort)(e);
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "checkmark"
  }), " All Sizes", " "))), sizes.map(function (size, key) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: key
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "sidebar-widget-list-left"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "text-uppercase",
      onClick: function onClick(e) {
        getSortParams("size", size);
        (0, _product.setActiveSort)(e);
      }
    }, " ", /*#__PURE__*/_react.default.createElement("span", {
      className: "checkmark"
    }), size, " ")));
  })) : "No sizes found"));
};

ShopSize.propTypes = {
  getSortParams: _propTypes.default.func,
  sizes: _propTypes.default.array
};
var _default = ShopSize;
exports.default = _default;