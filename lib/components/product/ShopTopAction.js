"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _product = require("../../helpers/product");

var ShopTopAction = function ShopTopAction(_ref) {
  var getLayout = _ref.getLayout,
      getFilterSortParams = _ref.getFilterSortParams,
      productCount = _ref.productCount,
      sortedProductCount = _ref.sortedProductCount;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "shop-top-bar mb-35"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "select-shoing-wrap"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "shop-select"
  }, /*#__PURE__*/_react.default.createElement("select", {
    onChange: function onChange(e) {
      return getFilterSortParams("filterSort", e.target.value);
    }
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "default"
  }, "Default"), /*#__PURE__*/_react.default.createElement("option", {
    value: "priceHighToLow"
  }, "Price - High to Low"), /*#__PURE__*/_react.default.createElement("option", {
    value: "priceLowToHigh"
  }, "Price - Low to High"))), /*#__PURE__*/_react.default.createElement("p", null, "Showing ", sortedProductCount, " of ", productCount, " result")), /*#__PURE__*/_react.default.createElement("div", {
    className: "shop-tab"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick(e) {
      getLayout("grid two-column");
      (0, _product.setActiveLayout)(e);
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-th-large"
  })), /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick(e) {
      getLayout("grid three-column");
      (0, _product.setActiveLayout)(e);
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-th"
  })), /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick(e) {
      getLayout("list");
      (0, _product.setActiveLayout)(e);
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-list-ul"
  }))));
};

ShopTopAction.propTypes = {
  getFilterSortParams: _propTypes.default.func,
  getLayout: _propTypes.default.func,
  productCount: _propTypes.default.number,
  sortedProductCount: _propTypes.default.number
};
var _default = ShopTopAction;
exports.default = _default;