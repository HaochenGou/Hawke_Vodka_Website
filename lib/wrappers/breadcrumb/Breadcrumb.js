"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactBreadcrumbsDynamic = require("react-breadcrumbs-dynamic");

var Breadcrumb = function Breadcrumb() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "breadcrumb-area pt-35 pb-35 bg-gray-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "breadcrumb-content text-center"
  }, /*#__PURE__*/_react.default.createElement(_reactBreadcrumbsDynamic.Breadcrumbs, {
    separator: /*#__PURE__*/_react.default.createElement("span", null, "/"),
    item: _reactRouterDom.NavLink,
    finalItem: "span"
  }))));
};

var _default = Breadcrumb;
exports.default = _default;