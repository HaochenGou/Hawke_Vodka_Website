"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _product = require("../../helpers/product");

var ShopColor = function ShopColor(_ref) {
  var colors = _ref.colors,
      getSortParams = _ref.getSortParams;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-widget mt-50"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "pro-sidebar-title"
  }, "Color "), /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-widget-list mt-20"
  }, colors ? /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-widget-list-left"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick(e) {
      getSortParams("color", "");
      (0, _product.setActiveSort)(e);
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "checkmark"
  }), " All Colors", " "))), colors.map(function (color, key) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: key
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "sidebar-widget-list-left"
    }, /*#__PURE__*/_react.default.createElement("button", {
      onClick: function onClick(e) {
        getSortParams("color", color);
        (0, _product.setActiveSort)(e);
      }
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "checkmark"
    }), " ", color, " ")));
  })) : "No colors found"));
};

ShopColor.propTypes = {
  colors: _propTypes.default.array,
  getSortParams: _propTypes.default.func
};
var _default = ShopColor;
exports.default = _default;