"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var ShopSearch = function ShopSearch() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-widget"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "pro-sidebar-title"
  }, "Search "), /*#__PURE__*/_react.default.createElement("div", {
    className: "pro-sidebar-search mb-50 mt-25"
  }, /*#__PURE__*/_react.default.createElement("form", {
    className: "pro-sidebar-search-form",
    action: "#"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "Search here..."
  }), /*#__PURE__*/_react.default.createElement("button", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "pe-7s-search"
  })))));
};

var _default = ShopSearch;
exports.default = _default;