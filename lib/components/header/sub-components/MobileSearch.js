"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var MobileSearch = function MobileSearch() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "offcanvas-mobile-search-area"
  }, /*#__PURE__*/_react.default.createElement("form", {
    action: "#"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    placeholder: "Search ..."
  }), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-search"
  }))));
};

var _default = MobileSearch;
exports.default = _default;