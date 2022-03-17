"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactMetaTags = _interopRequireDefault(require("react-meta-tags"));

var _reactHooksPaginator = _interopRequireDefault(require("react-hooks-paginator"));

var _reactBreadcrumbsDynamic = require("react-breadcrumbs-dynamic");

var _reactRedux = require("react-redux");

var _product = require("../../helpers/product");

var _LayoutOne = _interopRequireDefault(require("../../layouts/LayoutOne"));

var _Breadcrumb = _interopRequireDefault(require("../../wrappers/breadcrumb/Breadcrumb"));

var _ShopTopbar = _interopRequireDefault(require("../../wrappers/product/ShopTopbar"));

var _ShopProducts = _interopRequireDefault(require("../../wrappers/product/ShopProducts"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ShopListStandard = function ShopListStandard(_ref) {
  var location = _ref.location,
      products = _ref.products;

  var _useState = (0, _react.useState)("list"),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      layout = _useState2[0],
      setLayout = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      filterSortType = _useState4[0],
      setFilterSortType = _useState4[1];

  var _useState5 = (0, _react.useState)(""),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      filterSortValue = _useState6[0],
      setFilterSortValue = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      offset = _useState8[0],
      setOffset = _useState8[1];

  var _useState9 = (0, _react.useState)(1),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      currentPage = _useState10[0],
      setCurrentPage = _useState10[1];

  var _useState11 = (0, _react.useState)([]),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      currentData = _useState12[0],
      setCurrentData = _useState12[1];

  var _useState13 = (0, _react.useState)([]),
      _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
      sortedProducts = _useState14[0],
      setSortedProducts = _useState14[1];

  var pageLimit = 15;
  var pathname = location.pathname;

  var getLayout = function getLayout(layout) {
    setLayout(layout);
  };

  var getFilterSortParams = function getFilterSortParams(sortType, sortValue) {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  (0, _react.useEffect)(function () {
    var sortedProducts = (0, _product.getSortedProducts)(products);
    var filterSortedProducts = (0, _product.getSortedProducts)(sortedProducts, filterSortType, filterSortValue);
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, filterSortType, filterSortValue]);
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactMetaTags.default, null, /*#__PURE__*/_react.default.createElement("title", null, "Hawke Vodka | Shop Page"), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: "Shop page of Hawke Vodka."
  })), /*#__PURE__*/_react.default.createElement(_reactBreadcrumbsDynamic.BreadcrumbsItem, {
    to: process.env.PUBLIC_URL + "/"
  }, "Home"), /*#__PURE__*/_react.default.createElement(_reactBreadcrumbsDynamic.BreadcrumbsItem, {
    to: process.env.PUBLIC_URL + pathname
  }, "Shop"), /*#__PURE__*/_react.default.createElement(_LayoutOne.default, {
    headerTop: "visible"
  }, /*#__PURE__*/_react.default.createElement(_Breadcrumb.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "shop-area pt-95 pb-100"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-9 order-1 order-lg-2"
  }, /*#__PURE__*/_react.default.createElement(_ShopTopbar.default, {
    getLayout: getLayout,
    getFilterSortParams: getFilterSortParams,
    productCount: products.length,
    sortedProductCount: currentData.length
  }), /*#__PURE__*/_react.default.createElement(_ShopProducts.default, {
    layout: layout,
    products: currentData
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "pro-pagination-style text-center mt-30"
  }, /*#__PURE__*/_react.default.createElement(_reactHooksPaginator.default, {
    totalRecords: sortedProducts.length,
    pageLimit: pageLimit,
    pageNeighbours: 2,
    setOffset: setOffset,
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
    pageContainerClass: "mb-0 mt-0",
    pagePrevText: "\xAB",
    pageNextText: "\xBB"
  }))))))));
};

ShopListStandard.propTypes = {
  location: _propTypes.default.object,
  products: _propTypes.default.array
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.productData.products
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(ShopListStandard);

exports.default = _default;