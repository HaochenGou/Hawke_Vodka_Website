"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _ShopTopFilter = _interopRequireDefault(require("./ShopTopFilter"));

var _product = require("../../helpers/product");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ShopTopActionFilter = function ShopTopActionFilter(_ref) {
  var getFilterSortParams = _ref.getFilterSortParams,
      productCount = _ref.productCount,
      sortedProductCount = _ref.sortedProductCount,
      products = _ref.products,
      getSortParams = _ref.getSortParams;
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
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
    className: "filter-active"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick(e) {
      return (0, _product.toggleShopTopFilter)(e);
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-plus"
  }), " filter"))), /*#__PURE__*/_react.default.createElement(_ShopTopFilter.default, {
    products: products,
    getSortParams: getSortParams
  }));
};

ShopTopActionFilter.propTypes = {
  getFilterSortParams: _propTypes.default.func,
  getSortParams: _propTypes.default.func,
  productCount: _propTypes.default.number,
  products: _propTypes.default.array,
  sortedProductCount: _propTypes.default.number
};
var _default = ShopTopActionFilter;
exports.default = _default;