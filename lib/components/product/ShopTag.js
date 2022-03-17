"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _product = require("../../helpers/product");

var ShopTag = function ShopTag(_ref) {
  var tags = _ref.tags,
      getSortParams = _ref.getSortParams;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-widget mt-50"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "pro-sidebar-title"
  }, "Tag "), /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-widget-tag mt-25"
  }, tags ? /*#__PURE__*/_react.default.createElement("ul", null, tags.map(function (tag, key) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: key
    }, /*#__PURE__*/_react.default.createElement("button", {
      onClick: function onClick(e) {
        getSortParams("tag", tag);
        (0, _product.setActiveSort)(e);
      }
    }, tag));
  })) : "No tags found"));
};

ShopTag.propTypes = {
  getSortParams: _propTypes.default.func,
  tags: _propTypes.default.array
};
var _default = ShopTag;
exports.default = _default;